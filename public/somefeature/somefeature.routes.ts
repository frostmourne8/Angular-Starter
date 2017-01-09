import { IStateProvider } from 'angular-ui-router';

export function SomeFeatureRoutes($stateProvider: IStateProvider) {
  'ngInject';

    $stateProvider.state({
        name: 'somefeature',
        url: '/somefeature',
        template: '<somefeature></somefeature>'
    });
}