const exampleRoute = require('./example')
const usersRoute = require('./users')


function route(app) {
    app.use('/example', exampleRoute)
    app.use('/users', usersRoute)
}

module.exports = route

