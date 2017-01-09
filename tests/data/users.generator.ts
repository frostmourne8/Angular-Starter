import { User } from 'users/users.model';

export class UsersGenerator {

    public createUsers(count: number): Array<User> {
        let users: Array<User> = new Array<User>();
        for(let i = 0;i < count;i++) {
            users.push(this.createUser(i));
        }

        return users;
    }

    public createUser(index?: number): User {
        if(!index) { index = 0; }

        let user: User = new User();
        user.id = 'id_' + index;
        user.name = 'user_' + index;
        user.email = user.name + '@emailserver.com';
        user.birthday = new Date();

        return user;
    }
}