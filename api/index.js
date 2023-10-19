import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
// import movieRouter from './routes/movie.route.js'
// import listRouter from './routes/list.route.js'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config()

const connect = async() => {
    try {
         await mongoose.connect(process.env.MONGODB);
         console.log("DB Connection Successful");
    } catch (err) {
        console.log(err)
    }
}

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/users', userRouter)
// app.use('/api/movies', movieRouter)
// app.use('/api/lists', listRouter)

app.listen(8000, ()=> {
    connect()
    console.log('Server is running!')
})