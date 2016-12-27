import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from 'app/app.routes';
import somefeature from 'somefeature/somefeature.module';

export default angular.module('app', [uiRouter, somefeature])
    .config(routes)
    .name;