import { IComponentOptions, IController } from 'angular';

import { User } from '../users.model';

export class UserProfileComponentController implements IController {
    public user: User;
}

export const UserProfileComponent: IComponentOptions = {
    template: require('./user-profile.html'),
    controller: UserProfileComponentController,
    bindings: {
        user: '<'
    }
};