const express = require('express')
const cors = require('cors')
const app = express();
const connectDB = require('./config/db')

//import routs
const eventsRoute = require('./routes/events')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

//setup middleware functions
app.use(express.json({extended: false}))
app.use(cors())

//connect to database
connectDB()

//routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/events', eventsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Port: ${PORT}`))