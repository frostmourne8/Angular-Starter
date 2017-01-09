import { module } from 'angular';

import { UsersModel } from './users.model';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './components/user-profile.component';
import { UsersRoutes } from './users.routes';

const requires: string[] = [
    'ui.router',
    'ngResource'
]

export const UsersModule = module('users', requires)
    .service('UsersModel', UsersModel)
    .component('users', UsersComponent)
    .component('userProfile', UserProfileComponent)
    .config(UsersRoutes)
    .name;