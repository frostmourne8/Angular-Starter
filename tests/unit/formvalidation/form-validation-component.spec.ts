import { FormValidationComponentController } from 'formvalidation/form-validation.component';
import { FormInputValidation, FormInputTransform } from 'formvalidation/components/form-input.directive';

describe('FormValidationComponent', () => {

    let controller: FormValidationComponentController;

    it('should initialize the confirmPassword value to the current user password', () => {
        expect(controller.confirmPassword).toBe(controller.user.password);
    });

    describe('NameStartsWithA', () => {

        let validator: FormInputValidation<string>;

        it('should validate a value that begins with a', () => {
            expect(validator.validate('a value')).toBe(true);
        });

        it('should invalidate a value that does not begin with a', () => {
            expect(validator.validate('value that does not start with a')).toBe(false);
        });

        it('should ignore case', () => {
            expect(validator.validate('A value with a capital A')).toBe(true);
        });

        beforeEach(() => {
            validator = controller.nameValidations[0];
        });
    });

    describe('NameIsFourteenCharsLong', () => {

        let validator: FormInputValidation<string>;

        it('should validate a value that is 14 characters long', () => {
            expect(validator.validate('long enough ok')).toBe(true);
        });

        it('should invalidate a value that is more than 14 characters long', () => {
            expect(validator.validate('a value that is too long')).toBe(false);
        });

        it('should invalidate a value that is less than 14 characters long', () => {
            expect(validator.validate('val')).toBe(false);
        });

        beforeEach(() => {
            validator = controller.nameValidations[1];
        });
    });

    describe('PasswordShouldMatch', () => {

        let validator: FormInputValidation<string>;

        it('should validate a password that matches the confirm password', () => {
            expect(validator.validate(controller.user.password)).toBe(true);
        });

        it('should invalidate a password that does not match', () => {
            expect(validator.validate('a different password')).toBe(false);
        });

        beforeEach(() => {
            validator = controller.confirmPasswordValidations[0];
        });
    });

    describe('DateTransform', () => {

        let transform: FormInputTransform<Date, number>;

        it('should format a timestamp into a date', () => {
            let date: Date = new Date();
            expect(transform.format(date.getTime())).toEqual(date);
        });

        it('should parse a date into a timestamp', () => {
            let date: Date = new Date();
            expect(transform.parse(date)).toEqual(date.getTime());
        });

        it('should parse an undefined date into null', () => {
            expect(transform.parse(undefined)).toBe(null);
        });

        beforeEach(() => {
            transform = controller.dateTransforms[0];
        });
    });

    beforeEach(() => {
        controller = new FormValidationComponentController();
    });
});