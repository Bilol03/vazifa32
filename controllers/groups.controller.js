import { Model } from "../models/db.model.js";

let postGroup = async(req, res) => {
    let body = req.body
    let data = await Model.createGroup(body)
    res.status(201).json(data.rows)
}

let getGroup = async(req, res) => {
    let data = await Model.find()
    res.status(200).json(data.rows)
}

export default {
    postGroup,
    getGroup
}