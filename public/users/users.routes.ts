import { IStateProvider } from 'angular-ui-router';

export function UsersRoutes($stateProvider: IStateProvider) {
    'ngInject';

    $stateProvider.state({
        name: 'users',
        url: '/users',
        template: '<users></users>'
    });
}