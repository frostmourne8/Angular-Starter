import { IDirective, IController, IFormController, INgModelController, IScope, IInterpolateService, element } from 'angular';

export interface FormInputValidation<V> {
    name: string;
    description: string;
    validate: (value: V) => boolean;
}

export interface FormInputTransform<V,M> {
    parse: (value: V) => M;
    format: (value: M) => V;
}

export class FormInputComponentController implements IController {

    public form: IFormController;
    public name: string;
    public validations: FormInputValidation<any>[];
    public transforms: FormInputTransform<any,any>[];

    constructor(public $scope: IScope) { 'ngInject'; }

    public $onInit() {        
        this.onInputControllerInit((inputController: INgModelController) => {
            this.applyTransforms(inputController);
            this.applyValidations(inputController);          
        });
    }

    public isInvalid(): boolean {
        let inputController = this.getInputController();
        let inValid = inputController.$invalid && !inputController.$pristine;

        return inValid;
    }

    public invalidLabel(): string {
        let inputController = this.getInputController();
        let missingRequired = inputController.$error.required;

        return missingRequired === true ? 'Required Value' : 'Invalid Value';
    }

    public isRequired(): boolean {
        let inputController = this.getInputController();
        return inputController.$validators['required'] !== undefined;
    }

    public shouldShowValidationInfo(validation: FormInputValidation<any>): boolean {
        let inputController = this.getInputController();
        return !validation.validate(inputController.$viewValue);
    }

    private getInputController = (): INgModelController => {
        return this.form[this.name];
    }

    private onInputControllerInit(callback: (inputController: INgModelController) => void) {
        let unwatch = this.$scope.$watch(this.getInputController, (inputController: INgModelController) => {
            if(inputController) {
                callback(inputController);
                unwatch();
            }            
        });
    }

    private applyValidations = (inputController: INgModelController) => {
        if(!this.validations) { return; }

        this.validations.forEach((validation: FormInputValidation<any>) => {
            inputController.$validators[validation.name] = validation.validate;
        });

        inputController.$validate();
    }

    private applyTransforms = (inputController: INgModelController) => {
        if(!this.transforms) { return; }

        this.transforms.forEach((transform: FormInputTransform<any,any>) => {
            inputController.$parsers.push(transform.parse);
            inputController.$formatters.push(transform.format);
        });
    }
}

export function FormInputDirective($interpolate: IInterpolateService): IDirective {
    'ngInject';

    return {
        template: require('./form-input.html'),
        controller: FormInputComponentController,
        controllerAs: '$ctrl',
        bindToController: true,
        transclude: 'element',
        replace: true,
        priority: 1000, //Needs to be higher than ng-model or else transclusion stomps on it
        scope: {
            label: '@',
            form: '<',
            whyText: '@?',
            validations: '<?',
            transforms: '<?'
        },
        link: link
    }

    function link(scope: IScope, directiveElement: JQuery, attrs, ctrl, transclude) {
        transclude((inputElement: JQuery)=> {
            inputElement.addClass('form-control');

            ctrl.id = $interpolate(attrs.id)(scope.$parent);
            ctrl.name = $interpolate(attrs.name)(scope.$parent);

            let anchor: JQuery = element(directiveElement[0].querySelector('.form-input'));
            
            anchor.append(inputElement);
        });
    }
}