const users = require('../mocks/users.js');

module.exports = {
    listUsers(request, response) {
        const { order } = request.query;

        console.log(order)

        const sortedUsers = users.sort((a, b)=> {
            if(order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1;
        })

        response.send(200, sortedUsers);
    },
    getUserById(request, response) {
        const { id } = request.params;

        const user = users.find((userObj) => userObj.id === Number(id));

        if(!user) {
            return response.send(400, {error: 'Not Found'});    
        }
        response.send(200, user);
    }

}