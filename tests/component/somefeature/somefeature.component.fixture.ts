import { ComponentFixture } from 'tests/component/component.fixture';
import { IncrementerComponentController } from 'somefeature/components/incrementer.component';

const MARKUP = '<somefeature></somefeature>';

export class SomeFeatureComponentFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public headerText(): string {
        return this.elementText('feature-header');
    }

    public get value(): number {
        return this.getBinding('value');
    }

    public incrementer(): IncrementerComponentController {
        return <IncrementerComponentController>this.childComponent('somefeature-incrementer', 'incrementer');
    }
}