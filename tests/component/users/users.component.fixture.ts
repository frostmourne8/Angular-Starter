import { ComponentFixture } from 'tests/component/component.fixture';
import { UserProfileComponentController } from 'users/components/user-profile.component';

const MARKUP = '<users></users>';

export class UsersComponentFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public currentUserHeader(): string {
        return this.elementText('current-user-header');
    }

    public usersHeader(): string {
        return this.elementText('users-header');
    }

    public userNames(): Array<string> {
        return this.elementByClass('user').get().map((element: HTMLElement) => {
            return element.textContent;
        });
    }

    public clickUser(index: number) : void {
        this.clickChild('user', index);
    }

    public userProfile(): UserProfileComponentController {
        return <UserProfileComponentController>this.childComponent('user-profile', 'userProfile');
    }
}