import { SomeFeatureComponentController } from 'somefeature/somefeature.component';

describe('SomeFeatureComponent', () => {

    let controller: SomeFeatureComponentController;

    beforeEach(() => {
        controller = new SomeFeatureComponentController();
    });

    it('should have its value initialized to 3', () => {
        expect(controller.value).toBe(3);
    });

    describe('updateValue', () => {

        it('should be exposed', () => {
            expect(controller.updateValue).toBeDefined();
        });

        it('should set the value to the passed parameter', () => {
            let newValue = 5;
            controller.updateValue(newValue);
            expect(controller.value).toBe(newValue);
        });
    });
});