import { ComponentFixture } from 'tests/component/component.fixture';
import { FormInputFixture } from './form-input.fixture';

const MARKUP = '<formvalidation></formvalidation>'

export class FormValidationFixture extends ComponentFixture {

    constructor() {
        super(MARKUP);
    }    

    public nameInput(): FormInputFixture<string> {
        return this.inputFixture('nameField');
    }

    public emailInput(): FormInputFixture<string> {
        return this.inputFixture('emailField');
    }

    public birthdayInput(): FormInputFixture<Date> {
        return this.inputFixture('birthdayField');
    }

    public ssnInput(): FormInputFixture<string> {
        return this.inputFixture('ssnField');
    }

    public passwordInput(): FormInputFixture<string> {
        return this.inputFixture('passwordField');
    }

    public confirmPasswordInput(): FormInputFixture<string> {
        return this.inputFixture('confirmPasswordField');
    }

    private inputFixture(id: string): FormInputFixture<any> {
        let fixture: FormInputFixture<any> = new FormInputFixture();
        let inputElement = this.element(id).first();
        fixture.wrap(inputElement);

        console.info('Input element ' + inputElement.html());

        return fixture;
    }
}