import { module } from 'angular';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SomeFeatureModule } from 'somefeature/somefeature.module';
import { UsersModule } from 'users/users.module';
import { FormValidationModule } from 'formvalidation/form-validation.module';

const requires: string[] = [
    'ui.router',
    SomeFeatureModule,
    UsersModule,
    FormValidationModule
];

export const AppModule = module('app', requires)
    .component('app', AppComponent)
    .config(AppRoutes)
    .name;