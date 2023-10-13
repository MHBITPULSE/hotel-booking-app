module.exports = (app) => {
    const userRouter = require('./user.routes')

    app.use('/user', userRouter)

    const roomRouter = require('./room.routes')

    app.use('/room', roomRouter)

    const bookingRouter = require('./booking.routes')

    app.use('/booking', bookingRouter)

    const fileRouter = require('./file.routes')

    app.use('/file', fileRouter)
}