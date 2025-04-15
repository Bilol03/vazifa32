import { pool } from '../config/db.config.js'

let DBMODEL = {
	find: function () {
		return pool.query('SELECT * FROM books')
	},
	findOne: function (params) {
		let field = Object.keys(params)[0]
		console.log(field, params)
		console.log(`SELECT * FROM books where ${field}=${params[field]}`)

		return pool.query(`SELECT * FROM users where ${field}=${params[field]}`)
	},
	updateByID: function (params, body) {
		let field = Object.keys(params)

		let name = body.body
		console.log(name)
		return pool.query(
			`UPDATE books SET full_name='${name}' where id=${params[field]} RETURNING *`,
		)
	},
	deleteById: function (id) {
		return pool.query('DELETE FROM books where id=$1 RETURNING *', [id])
	},
	create: function (body) {
		return pool.query(
			'insert into books(email, password, full_name) values($1, $2, $3) RETURNING *',
			[body.email, body.password, body.full_name],
		)
	},
}
