import { mock } from 'angular';

import { SomeFeatureComponentFixture } from './somefeature.component.fixture';
import { SomeFeatureService } from 'somefeature/somefeature.service';
import { IncrementerComponentController } from 'somefeature/components/incrementer.component';

describe('SomeFeatureComponent', () => {

    let fixture: SomeFeatureComponentFixture = new SomeFeatureComponentFixture();
    let service: SomeFeatureService;

    beforeEach(mock.module('somefeature'));
    beforeEach(fixture.initialize());

    it('should display the correct header', () => {
        expect(fixture.headerText()).toBe('This is where the feature goes');
    });
    
    describe('somefeature incrementer', () => {

        let incrementer: IncrementerComponentController;

        it('should initialize the value to 3', () => {
            expect(incrementer.value).toBe(3);
        });

        it('should update the value when it is incremented', () => {
            let initialValue = incrementer.value;
            incrementer.incrementValue();

            expect(fixture.value).not.toBe(initialValue);
        });

        beforeEach(() => {
            incrementer = fixture.incrementer();
        });
    });
});