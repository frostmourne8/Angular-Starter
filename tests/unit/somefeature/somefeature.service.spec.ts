import { SomeFeatureService } from 'somefeature/somefeature.service';


describe('SomeFeatureService', () => {

    let service: SomeFeatureService;

    describe('getValue', () => {

        it('should be exposed', () => {
            expect(service.getValue).toBeDefined();
        });

        it('should return the value 5', () => {
            expect(service.getValue()).toBe(5);
        });

        it('should return the same value if called multiple times', () => {
            for(let i = 0;i < 5;i++) {
                service.getValue();
            }

            expect(service.getValue()).toBe(5);
        });
    });

    beforeEach(() => {
        service = new SomeFeatureService();
    });
});