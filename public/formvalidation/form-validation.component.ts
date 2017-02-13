import { IComponentOptions, IController } from 'angular';
import { FormInputValidation, FormInputTransform } from './components/form-input.directive';

import './form-validation.css';

class User {
    name: string;
    email: string;
    birthday: number;
    ssn: string;
    password: string;
}

export class FormValidationComponentController implements IController {

    public user: User;
    public confirmPassword: string;
    public nameValidations: FormInputValidation<string>[];
    public dateTransforms: FormInputTransform<Date, number>[];
    public confirmPasswordValidations: FormInputValidation<string>[];

    private NameStartsWithA: FormInputValidation<string> = {
        name: 'nameStartsWithA',
        description: 'The name should start with the letter A',
        validate: (name: string) => {
            return name.charAt(0).toLowerCase() === 'a';
        }
    };

    private NameIsFourteenCharsLong: FormInputValidation<string> = {
        name: 'nameIs14Long',
        description: 'The name should be fourteen characters long',
        validate: (name: string) => {
            return name.length === 14;
        }
    }

    private PasswordShouldMatch: FormInputValidation<string> = {
        name: 'confirmPassword',
        description: 'Passwords do not match',
        validate: (confirmPassword: string) => {
            return this.user.password === confirmPassword;
        }
    }

    private DateTransform: FormInputTransform<Date, number> = {
        parse: (date: Date) => {
            return date ? date.getTime() : null;
        },

        format: (timestamp: number) => {
            return new Date(timestamp);
        }
    }

    constructor() {
        this.user = new User();
        this.user.name = 'A starter name';
        this.user.email = 'starter@email.com';
        this.user.birthday = new Date().getTime();
        this.user.ssn = '123456789';
        this.user.password = 'abc123';

        this.confirmPassword = this.user.password;

        this.nameValidations = [ this.NameStartsWithA, this.NameIsFourteenCharsLong ];
        this.dateTransforms = [ this.DateTransform ];
        this.confirmPasswordValidations = [ this.PasswordShouldMatch ]
    }
}

export const FormValidationComponent: IComponentOptions = {
    template: require('./form-validation.html'),
    controller: FormValidationComponentController
}