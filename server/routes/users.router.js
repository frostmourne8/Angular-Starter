'use strict';

const express = require('express');

const usersService = require('../services/users.service');

function UsersRouter() {

    this.apply = apply;

    function apply(app) {
        app.use('/users', createRouter());
    }

    function createRouter() {
        let router = express.Router();

        router.get('/', allUsers);
        router.get('/:id', userById);

        return router;
    }

    function allUsers(req, res) {
        usersService.allUsers().then(function(users) {
            res.json(users);
        });
    }

    function userById(req, res) {
        let userId = req.params.id;
        usersService.userById(userId).then(function(user) {
            res.json(user);
        });
    }
}

module.exports = new UsersRouter();