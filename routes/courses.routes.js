import { Router } from "express";
import courseController from '../controllers/courses.controller.js'
let route = Router()

route.post("/course", studentController.postStudent)
export default route