'use strict';

const promise = require('bluebird');
const _ = require('lodash');

const USERS = [
    {id: '1', name: 'Josh', email: 'josh@emailserver.com', birthday: 1483636617884},
    {id: '2', name: 'Bob', email: 'bob@emailserver.com', birthday: 1483634617894},
    {id: '3', name: 'Fred', email: 'fred@emailserver.com', birthday: 1463636617384}
];

function UsersService() {

    this.userById = userById;
    this.allUsers = allUsers;

    function userById(id) {
        let user = _.find(USERS, {id: id});
        return promise.resolve(user);
    }

    function allUsers() {
        return promise.resolve(USERS);
    }
}

module.exports = new UsersService();