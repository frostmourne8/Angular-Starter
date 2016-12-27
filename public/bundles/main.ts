import * as angular from 'angular';
import app from 'app/app.module';

angular.element(function() {
  angular.bootstrap(document.body, [app]);
});