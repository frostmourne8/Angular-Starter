import { ComponentFixture } from 'tests/component/component.fixture';

const MARKUP = '<app></app>';

export class AppComponentFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public headerText(): string {
        return this.elementText('app-header');
    }
}