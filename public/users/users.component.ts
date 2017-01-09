import { IComponentOptions, IController } from 'angular';

import { UsersModel, User } from './users.model';

export class UsersComponentController implements IController {

    static $inject: Array<string> = ['UsersModel'];

    public user: User;
    public users: User[];

    private model: UsersModel;

    constructor(model: UsersModel) {
        this.model = model;
        this.users = model.users();
    }

    public userSelected(userId: string) {
        this.user = this.model.user(userId);
    }
}

export const UsersComponent: IComponentOptions = {
    template: require('./users.html'),
    controller: UsersComponentController
};