import { mock } from 'angular';

import { AppComponentFixture } from './app.component.fixture';

describe('AppComponent', () => {

    let fixture: AppComponentFixture = new AppComponentFixture();

    beforeEach(mock.module('app'));
    beforeEach(fixture.initialize());

    it('should display the correct header', () => {
        expect(fixture.headerText()).toBe('The Test Application');
    });
});