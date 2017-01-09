import { IComponentOptions, IController } from 'angular';

import { SomeFeatureService } from '../somefeature.service';

export class IncrementerComponentController implements IController {

    static $inject: Array<string> = ['SomeFeatureService'];

    public value: number;
    public onIncrement: (newValue: {newValue: number}) => void;

    private incrementBy: number;

    constructor(service: SomeFeatureService) {
        this.incrementBy = service.getValue();
    }

    public incrementValue(): void {
        let newValue = this.value + this.incrementBy;
        this.onIncrement({newValue: newValue});
    }
}

export const IncrementerComponent: IComponentOptions = {
    template: require('./incrementer.html'),
    controller: IncrementerComponentController,
    bindings: {
        value: '<',
        onIncrement: '&'
    }
};