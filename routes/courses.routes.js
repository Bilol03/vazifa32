import { Router } from "express";
import courseController from '../controllers/courses.controller.js'
let route = Router()

route.post("/course", courseController.postCourse)
export default route