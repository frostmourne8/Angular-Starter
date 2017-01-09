import { module, ILocationProvider } from 'angular';
import { IUrlRouterProvider, IStateProvider } from 'angular-ui-router';

export function AppRoutes($urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider, $stateProvider: IStateProvider) {
    'ngInject';

    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/somefeature');
}