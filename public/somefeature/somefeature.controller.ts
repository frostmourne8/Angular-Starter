import SomeFeatureService from 'somefeature/somefeature.service';

export default class SomeFeatureController {

    public aControllerValue: string;
    public aServiceValue: number;

    /*ngInject*/
    constructor(service: SomeFeatureService) {
        this.aControllerValue = 'a value from the controller';
        this.aServiceValue = service.getValue();
    }
}