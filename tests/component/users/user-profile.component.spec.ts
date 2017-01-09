import { mock } from 'angular';

import { UserProfileComponentFixture } from './user-profile.component.fixture';
import { UsersGenerator } from 'tests/data/users.generator';
import { User } from 'users/users.model';

describe('UserProfileComponent', () => {

    let fixture: UserProfileComponentFixture = new UserProfileComponentFixture();
    let usersGenerator: UsersGenerator = new UsersGenerator();
    let dateFormatter: (date: Date) => void;

    beforeEach(mock.module('users'));
    beforeEach(fixture.initialize());

    beforeEach(mock.inject(($filter) => {
        dateFormatter = $filter('date');
        fixture.user = usersGenerator.createUser();
    }));
        
    it('should display the name of the user', () => {
        expect(fixture.name()).toBe('Name: ' + fixture.user.name);
    });

    it('should display the email of the user', () => {
        expect(fixture.email()).toBe('Email: ' + fixture.user.email);
    });

    it('should display the birthday of the user formatted', () => {
        let formattedBirthday = dateFormatter(fixture.user.birthday);
        expect(fixture.birthday()).toBe('Birthday: ' + formattedBirthday);
    });
});