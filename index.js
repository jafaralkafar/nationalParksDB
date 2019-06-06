const express = require('express')
const massive = require('massive')
require('dotenv').config()

const NPC = require('./controllers/nationalParks')

const app = express()

let { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    console.log('db is on')
    app.set('db', db)
})

app.get('/api/national_parks', NPC.read)
app.post('/api/national_parks', NPC.create)
app.put('/api/national_parks/:id', NPC.update)
app.delete('/api/national_parks/:id', NPC.delete)

app.listen(SERVER_PORT, () => {
    console.log('listening ', SERVER_PORT)
})