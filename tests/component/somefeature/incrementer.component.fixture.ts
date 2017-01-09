import { ComponentFixture } from 'tests/component/component.fixture';
import { IncrementerComponentController } from 'somefeature/components/incrementer.component';

const MARKUP = '<incrementer value="value" on-increment="onIncrement(newValue)"></incrementer>';

export class IncrementerComponentFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public set value(value: number) {
        this.setBinding('value', value);
    }

    public get value(): number {
        return this.getBinding('value');
    }

    public set onIncrement(onIncrement: (newValue: {newValue: number}) => void) {
        this.setBinding('onIncrement', onIncrement);
    }

    public get onIncrement(): (newValue: {newValue: number}) => void {
        return this.getBinding('onIncrement');
    }

    public valueText(): string {
        return this.elementText('current-value');
    }

    public clickIncrement() {
        this.clickElement('increment-btn');
    }
}