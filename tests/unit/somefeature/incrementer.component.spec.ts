import { IncrementerComponentController } from 'somefeature/components/incrementer.component';
import { SomeFeatureService } from 'somefeature/somefeature.service';

describe('IncrementerComponent', () => {

    let controller: IncrementerComponentController;
    let service: SomeFeatureService;

    beforeEach(() => {
        service = jasmine.createSpyObj('service', ['getValue']);
        (<jasmine.Spy>service.getValue).and.returnValue(5);

        controller = new IncrementerComponentController(service);
        controller.value = 5;
        controller.onIncrement = jasmine.createSpy('onIncrement');
    });

    describe('incrementValue', () => {

        let initialValue: number;

        it('should not set the value property after the increment', () => {
            expect(controller.value).toBe(initialValue);
        });

        it('should call the onIncrement with the newly incremented value', () => {
            let expectedValue = initialValue + service.getValue();
            expect(controller.onIncrement).toHaveBeenCalledWith({newValue: expectedValue});
        });

        beforeEach(() => {
            initialValue = controller.value;
            controller.incrementValue();
        });
    });
});