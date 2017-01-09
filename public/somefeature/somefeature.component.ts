import { IComponentOptions, IController } from 'angular';

import { SomeFeatureService } from './somefeature.service';

export class SomeFeatureComponentController implements IController {

    public value: number;

    constructor() {
        this.value = 3;
    }

    public updateValue(newValue: number): void {
        this.value = newValue;
    }
}

export const SomeFeatureComponent: IComponentOptions = {
    template: require('./somefeature.html'),
    controller: SomeFeatureComponentController
}