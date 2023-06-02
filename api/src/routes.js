const userController = require('./controllers/UserController.js');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: userController.listUsers
    },
    {
        endpoint: '/products',
        method: 'GET',
        handler: userController.listUsers
    },
]