import { mock } from 'angular';

import { IncrementerComponentFixture } from './incrementer.component.fixture';
import { SomeFeatureComponentController } from 'somefeature/somefeature.component';
import { SomeFeatureService } from 'somefeature/somefeature.service';

describe('IncrementerComponent', () => {

    let fixture: IncrementerComponentFixture = new IncrementerComponentFixture();
    let service: SomeFeatureService;

    beforeEach(mock.module('somefeature'));
    beforeEach(mock.module(mockDependencies));
    beforeEach(fixture.initialize());

    beforeEach(() => {
        fixture.value = 2;
        fixture.onIncrement = jasmine.createSpy('onIncrement');
    });

    it('should display the current value', () => {
        expect(fixture.valueText()).toBe(currentValueLabel());
    });

    it('should display newly update values', () => {
        fixture.value = 4;
        expect(fixture.valueText()).toBe(currentValueLabel());
    });

    it('should increment the value when the increment button is clicked', () => {
        let expectedValue = fixture.value + service.getValue();
        fixture.clickIncrement();

        expect(fixture.onIncrement).toHaveBeenCalledWith(expectedValue);
    });

    function currentValueLabel() {
        return 'Current Value: ' + fixture.value;
    }

    function mockDependencies($provide) {
        service = jasmine.createSpyObj('service', ['getValue']);
        (<jasmine.Spy>service.getValue).and.returnValue(3);

        $provide.value('SomeFeatureService', service);
    }
});