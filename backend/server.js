const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const db = require('./models');
db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log(db.sequelize.models)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(err => console.log(err))

require('./routes')(app)

