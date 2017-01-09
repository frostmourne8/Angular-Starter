import { IHttpBackendService, mock, equals } from 'angular';

export class HttpTestHarness {

    private http: IHttpBackendService;

    public initialize() {
        afterEach(() => {
            this.http.verifyNoOutstandingExpectation();
        });

        return mock.inject(($httpBackend) => {
            this.http = $httpBackend;
        });
    }

    public get backend() {
        return this.http;
    }

    public verifyResponse<T>(expected: T, resource: ng.resource.IResource<T>) {
        this.http.flush();
        let actual = this.toObject(resource);

        expect(equals(expected, actual)).toBe(true);
    }

    public verifyArrayResponse<T, A extends ng.resource.IResourceArray<T>>(expected: Array<T>, resources: A) {
        this.http.flush();
        let actual: Array<T> = resources.map(this.toObject);

        expect(equals(expected, actual)).toBe(true);
    }

    private toObject<T>(resource: ng.resource.IResource<T>): T {
        return resource.toJSON();
    }
}