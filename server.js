import { config } from 'dotenv'
import express from 'express'
import studentRoute from './routes/student.routes.js'
config()
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(studentRoute)

app.listen(process.env.PORT, () => {
	console.log('Server is running on', process.env.PORT)
})
