let users = require('../mocks/users.js');

module.exports = {
    listUsers(request, response) {
        const { order } = request.query;

        console.log(order)

        const sortedUsers = users.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1;
        })

        response.send(200, sortedUsers);
    },
    getUserById(request, response) {
        const { id } = request.params;

        const user = users.find((userObj) => userObj.id === Number(id));

        if (!user) {
            return response.send(400, { error: 'Not Found' });
        }
        response.send(200, user);
    },
    createUser(request, response) {
        const { body } = request;

        const lastUserId = users[users.length - 1].id;
    
        const newUser = {
            id: lastUserId + 1,
            name: body.name
        }
    
        users.push(newUser);
    
        response.send(200, newUser)

    },
    updateUser(request, response) {
        let { id } = request.params;
        id = Number(id);
        const { name } = request.body;

        const userExists = users.find( (userObj) => (
            userObj.id === id
        ));

        if(!userExists) {
            return response.send(400, {error: 'User Not Found'});
        }

        users = users.map((user) => {
            if(user.id == id) {
                return {
                    ...user,
                    name,
                }
            }
            return user;
        }) 

        response.send(200, { id, name })
    },
    deleteUser(request, response) {
        let { id } = request.params;
        id = Number( id );

        const userExists = users.find((userObj) => (
            userObj.id === id
        ))

        if(!userExists) {
            return response.send(400, {error: 'User not found'})
        }
        users = users.filter((user) => user.id !== id);

        response.send(200, { deleted: true })
    }

}