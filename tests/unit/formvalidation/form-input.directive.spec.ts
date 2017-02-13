import { IScope, INgModelController, IFormController } from 'angular';
import { FormInputComponentController, FormInputValidation, FormInputTransform } from 'formvalidation/components/form-input.directive';

describe('FormInputComponentController', () => {

    let controller: FormInputComponentController;
    let inputController: INgModelController;
    let scope: IScope;

    it('should not fail if there are no transforms or validations', () => {
        initialize(); //Just don't explode
    });

    it('should add transforms to the inputController formatters and parsers', () => {
        let transform: FormInputTransform<string, string> = {
            format: (value: string) => { return value; },
            parse: (value: string) => { return value; }
        }

        controller.transforms = [ transform ];
        initialize();

        expect(inputController.$formatters[0]).toBe(transform.format);
        expect(inputController.$parsers[0]).toBe(transform.parse);
    });

    it('should add validations to the inputController validators', () => {
        controller.validations = [];
        for(let i = 0;i < 0;i++) {
           controller.validations.push(createValidation(i));
        }

        initialize();

        for(let i = 0;i < 0;i++) {
            let validation = controller.validations[i];
            expect(inputController.$validators[validation.name]).toBe(validation.validate);
        }
    });

    describe('isInvalid', () => {

        it('should be invalid if the input controller is not valid and not pristine', () => {
            inputController.$invalid = true;
            inputController.$pristine = false;

            expect(controller.isInvalid()).toBe(true);
        });

        it('should be valid if the input controller is not valid and pristine', () => {
            inputController.$invalid = false;
            inputController.$pristine = true;

            expect(controller.isInvalid()).toBe(false);
        });

        it('should be valid if the input controller is valid and not pristine', () => {
            inputController.$invalid = false;
            inputController.$pristine = false;

            expect(controller.isInvalid()).toBe(false);
        });

        it('should be valid if the input controller is valid and pristine', () => {
            inputController.$invalid = true;
            inputController.$pristine = true;

            expect(controller.isInvalid()).toBe(false);
        });
    });

    describe('invalidLabel', () => {

        it('should return the correct label if required validation failed', () => {
            inputController.$error.required = true;
            expect(controller.invalidLabel()).toBe('Required Value');
        });

        it('should return the correct label if required validation succeeds', () => {
            expect(controller.invalidLabel()).toBe('Invalid Value');
        });
    });

    describe('isRequired', () => {

        it('should return true if the input controller has a required validator', () => {
            inputController.$validators['required'] = jasmine.createSpy('required');
            expect(controller.isRequired()).toBe(true);
        });

        it('should return false if the input controller does not have a required validator', () => {
            expect(controller.isRequired()).toBe(false);
        });
    });

    describe('shouldShowValidationInfo', () => {

        let validation: FormInputValidation<boolean>;

        it('should return true if the validation fails', () => {
            inputController.$viewValue = false;
            expect(controller.shouldShowValidationInfo(validation)).toBe(true);
        });

        it('should return false if the validation succeeds', () => {
            inputController.$viewValue = true;
            expect(controller.shouldShowValidationInfo(validation)).toBe(false);
        });

        beforeEach(() => {
            validation = createValidation(0);
        });
    });

    function createValidation(index: number): FormInputValidation<boolean> {
        return {
            name: 'validation_' + index,
            description: 'description_' + index,
            validate: (value: boolean) => {
                return value;
            }
        };
    }

    beforeEach(() => {
        scope = jasmine.createSpyObj('scope', ['$watch']);
        (<jasmine.Spy>scope.$watch).and.returnValue(jasmine.createSpy('unwatch'));

        controller = new FormInputComponentController(scope);
        controller.$onInit();

        inputController = jasmine.createSpyObj('inputController', ['$validate']);
        inputController.$error = {};
        inputController.$validators = {};
        inputController.$formatters = [];
        inputController.$parsers = [];

        controller.name = 'inputName';
        controller.form = <IFormController>{};
        controller.form[controller.name] = inputController;
    });

    function initialize() {
        let onInit = (<jasmine.Spy>scope.$watch).calls.mostRecent().args[1];
        onInit(inputController);
    }
});