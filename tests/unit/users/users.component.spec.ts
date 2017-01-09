import { UsersComponentController } from 'users/users.component';
import { UsersModel, User } from 'users/users.model';
import { UsersGenerator } from 'tests/data/users.generator';


describe('UsersComponent', () => {

    let usersGenerator: UsersGenerator = new UsersGenerator();

    let controller: UsersComponentController;
    let model: UsersModel;
    let users: User[];
    let user: User;

    
    beforeEach(() => {
        users = usersGenerator.createUsers(5);
        user = users[1];

        model = jasmine.createSpyObj('model', ['users', 'user']);
        (<jasmine.Spy>model.users).and.returnValue(users);
        (<jasmine.Spy>model.user).and.returnValue(user);

        controller = new UsersComponentController(model);
    });
        
    it('should fetch all users from the model', () => {
        expect(model.users).toHaveBeenCalled();
        expect(controller.users).toBe(users);
    });

    describe('userSelected', () => {
        
        it('should fetch the user whose id is passed in', () => {
            controller.userSelected(user.id);

            expect(model.user).toHaveBeenCalledWith(user.id);
            expect(controller.user).toBe(user);
        });
    });        
});