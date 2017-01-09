import { module } from 'angular';

import { SomeFeatureComponent } from './somefeature.component';
import { IncrementerComponent } from './components/incrementer.component';
import { SomeFeatureService } from './somefeature.service';
import { SomeFeatureRoutes } from './somefeature.routes';

const requires: string[] = [ 'ui.router' ];

export const SomeFeatureModule = module('somefeature', requires)
    .component('somefeature', SomeFeatureComponent)
    .component('incrementer', IncrementerComponent)
    .service('SomeFeatureService', SomeFeatureService)
    .config(SomeFeatureRoutes)
    .name;