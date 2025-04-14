import { Router } from "express";
import groupsController from '../controllers/groups.controller.js'
let route = Router()

route.post("/groups", groupsController.postGroup)
route.get("/groups", groupsController.getGroup)
export default route