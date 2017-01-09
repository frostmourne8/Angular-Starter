Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');
require('jquery');

require('bundles/main');
require('bundles/dependencies');

require('angular-mocks');

var appContext = require.context('../tests', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);