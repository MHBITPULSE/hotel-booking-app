module.exports = (app) => {
    const userRouter = require('./user.routes')

    app.use('/user', userRouter)
}