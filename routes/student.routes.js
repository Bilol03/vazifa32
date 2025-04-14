import { Router } from "express";
import studentController from '../controllers/students.controller.js'
let route = Router()

route.post("/student", studentController.postStudent)
export default route