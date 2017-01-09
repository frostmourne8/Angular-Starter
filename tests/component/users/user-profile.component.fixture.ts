import { ComponentFixture } from 'tests/component/component.fixture';
import { User } from 'users/users.model';

const MARKUP = '<user-profile user="user"></user-profile>';

export class UserProfileComponentFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public get user(): User {
        return this.getBinding('user');
    }

    public set user(user: User) {
        this.setBinding('user', user);
    }

    public name(): string {
        return this.elementText('user-name');
    }

    public email(): string {
        return this.elementText('user-email');
    }

    public birthday(): string {
        return this.elementText('user-birthday');
    }
}