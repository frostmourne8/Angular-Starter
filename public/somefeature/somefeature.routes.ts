import { IStateProvider } from 'angular-ui-router';

/*@ngInject*/
export default function routes($stateProvider: IStateProvider) {
    $stateProvider
    .state('somefeature', {
      url: '/',
      template: require('somefeature/somefeature.html'),
      controller: 'SomeFeatureController',
      controllerAs: 'someFeature'
    });
}