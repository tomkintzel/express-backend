import {pool} from '../config/database.js'

export async function getAllServers() {
	const [rows] = await pool.query("SELECT * FROM servers")
    return rows
}

export async function getServer(id) {
	const [row] = await pool.query("SELECT * FROM servers WHERE id=?",[id])
	return row
}
