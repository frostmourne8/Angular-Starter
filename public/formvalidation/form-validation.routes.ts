import { IStateProvider } from 'angular-ui-router';

export function FormValidationRoutes($stateProvider: IStateProvider) {
  'ngInject';

    $stateProvider.state({
        name: 'formvalidation',
        url: '/formvalidation',
        template: '<formvalidation></formvalidation>'
    });
}