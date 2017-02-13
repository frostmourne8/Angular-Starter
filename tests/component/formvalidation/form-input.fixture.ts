import { ComponentFixture } from 'tests/component/component.fixture';
import { FormInputValidation, FormInputTransform } from 'formvalidation/components/form-input.directive';

const ID = 'someId';
const NAME = 'someName';
const LABEL = 'someLabel';
const WHY_TEXT = 'someWhyText';

const MARKUP = `
    <form name="someForm">
        <input form-input type="text"
           id="` + ID + `"
           name="` + NAME + `"
           label="` + LABEL + `"
           why-text="` + WHY_TEXT + `"
           validations="validations"
           transforms="transforms"
           form="someForm"
           ng-model="value"
           ng-required="required">
    </form>`;

export class FormInputFixture<T> extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }

    public set validations(validations: FormInputValidation<any>[]) {
        this.setBinding('validations', validations);
    }

    public set transforms(transforms: FormInputTransform<any,any>[]) {
        this.setBinding('transforms', transforms);
    }

    public get value(): T {
        return this.getBinding('value');
    }

    public set value(value: T) {
        this.setBinding('value', value);
    }

    public set required(required: boolean) {
        this.setBinding('required', required);
    }

    public enterValue(value: T) {
        this.element().val(<any>value);
    }

    public error(): string {
        return this.elementByClass('form-input-error').text();
    }

    public errorInfo(): string[] {
        let infoElements: JQuery = this.elementByClass('form-input-info');
        return infoElements.get().map((infoElement: HTMLElement) => {
            return infoElement.textContent;
        });
    }

    public hasRequiredMarker(): boolean {
        return this.elementByClass('required-marker').length > 0;
    }
}