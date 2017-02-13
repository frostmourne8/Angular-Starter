import { module } from 'angular';

import { FormValidationRoutes } from './form-validation.routes'
import { FormValidationComponent } from './form-validation.component'
import { FormInputDirective } from './components/form-input.directive'
import { SSNInputComponent } from './components/ssn-input.component'

const requires: string[] = [ 'ui.router', 'ui.bootstrap', 'ui.mask' ];

export const FormValidationModule = module('formvalidation', requires)
    .component('formvalidation', FormValidationComponent)
    .component('ssnInput', SSNInputComponent)
    .directive('formInput', FormInputDirective)    
    .config(FormValidationRoutes)
    .name;