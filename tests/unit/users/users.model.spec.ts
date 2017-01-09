import { mock } from 'angular';

import { HttpTestHarness } from 'tests/utils/http.harness';
import { UsersGenerator } from 'tests/data/users.generator';
import { UsersModel, User, UserResource, UsersResource } from 'users/users.model';

describe('UsersModel', () => {

    let httpHarness: HttpTestHarness = new HttpTestHarness();
    let usersGenerator: UsersGenerator = new UsersGenerator();
    let model: UsersModel;

    beforeEach(mock.module('users'));
    beforeEach(httpHarness.initialize());

    describe('users', () => {

        it('should fetch all users from the users endpoint', () => {
            let users: User[] = usersGenerator.createUsers(5);
            httpHarness.backend.expectGET('/users').respond(users);
            let usersResource: UsersResource = model.users();

            httpHarness.verifyArrayResponse(users, usersResource);
        });
    });

    describe('user', () => {

        it('should fetch the user with the passed id from the users endpoint', () => {
            let user: User = usersGenerator.createUser();
            httpHarness.backend.expectGET('/users/' + user.id).respond(user);
            let userResource: UserResource = model.user(user.id);

            httpHarness.verifyResponse(user, userResource);
        });
    });

    beforeEach(mock.inject((UsersModel) => {
        model = UsersModel;
    }));
});