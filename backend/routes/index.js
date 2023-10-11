module.exports = (app) => {
    const userRouter = require('./user.routes')

    app.use('/user', userRouter)

    const roomRouter = require('./room.routes')

    app.use('/room', roomRouter)
}