import { Model } from "../models/db.model.js";

let postCourse = async(req, res) => {
    let body = req.body
    let data = await Model.createCourses(body)
    res.status(201).json(data.rows)
}

export default {
    postCourse
}