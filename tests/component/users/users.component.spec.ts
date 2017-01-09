import { mock } from 'angular';

import { User, UserResource } from 'users/users.model';
import { HttpTestHarness } from 'tests/utils/http.harness';
import { UsersGenerator } from 'tests/data/users.generator';
import { UsersComponentFixture } from './users.component.fixture';

describe('UsersComponent', () => {

    let httpHarness: HttpTestHarness = new HttpTestHarness();
    let usersGenerator: UsersGenerator = new UsersGenerator();
    let fixture: UsersComponentFixture = new UsersComponentFixture();

    let users: User[];
    let user: User;

    beforeEach(mock.module('users'));
    beforeEach(httpHarness.initialize());
    beforeEach(fixture.initialize());

    beforeEach(() => {
        users = usersGenerator.createUsers(5);
        user = users[1];

        httpHarness.backend.whenGET('/users').respond(users);
        httpHarness.backend.whenGET('/users/' + user.id).respond(user);
        httpHarness.backend.flush();
    });

    describe('users list', () => {

        it('should list all of the users from the model', () => {
            let userNames = users.map((user: User) => {
                return user.name;
            });

            expect(fixture.userNames()).toEqual(userNames);
        });
    });

    describe('current user', () => {

        it('should display the correct header', () => {
            expect(fixture.currentUserHeader()).toBe('Current User');
        });

        it('should display the profile of the selected user', () => {
            let index: number = 1;
            fixture.clickUser(index);

            httpHarness.verifyResponse(users[index], <UserResource>fixture.userProfile().user);
        });
    });
});