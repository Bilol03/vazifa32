import { config } from 'dotenv'
import express from 'express'
import studentRoute from './routes/student.routes.js'
import courseRoute from './routes/courses.routes.js'
config()
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(studentRoute)
app.use(courseRoute)

app.listen(process.env.PORT, () => {
	console.log('Server is running on', process.env.PORT)
})
