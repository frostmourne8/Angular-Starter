export class User {
    id: string;
    name: string;
    email: string;
    birthday: Date;
}

export interface UserResource extends User, ng.resource.IResource<User> { }
export interface UsersResource extends ng.resource.IResourceArray<User> { }
export interface UserClass extends ng.resource.IResourceClass<UserResource> { }

export class UsersModel {

    private resource: UserClass;

    constructor($resource: ng.resource.IResourceService) {
        'ngInject';
        this.resource = <UserClass>$resource('/users/:id', {id: '@id'});
    }

    public user(id: string): UserResource {
        return this.resource.get({id: id});
    }

    public users(): UsersResource {
        return this.resource.query();
    }
}