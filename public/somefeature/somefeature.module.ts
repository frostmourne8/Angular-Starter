import * as angular from 'angular';

import routes from 'somefeature/somefeature.routes';
import SomeFeatureController from 'somefeature/somefeature.controller';
import SomeFeatureService from 'somefeature/somefeature.service';

export default angular.module('somefeature', [])
    .config(routes)
    .controller('SomeFeatureController', SomeFeatureController)
    .service('SomeFeatureService', SomeFeatureService)
    .name;