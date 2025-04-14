import { Model } from "../models/db.model.js";

let postStudent = async(req, res) => {
    let body = req.body
    let data = await Model.createStudent(body)
    res.status(201).json(data.rows)
}

export default {
    postStudent
}