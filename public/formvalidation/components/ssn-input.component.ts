import { IComponentOptions, IController } from 'angular';

export class SSNInputComponentController implements IController { }

export const SSNInputComponent: IComponentOptions = {
    template: require('./ssn-input.html'),
    controller: SSNInputComponentController,
    bindings: {
        id: '@',
        name: '@',
        form: '<',
        required: '<',
        value: '=ngModel'
    }
}