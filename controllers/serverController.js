import express from "express";

import {pool} from '../config/database'

const servers = [
    {
        "id": 1,
        "name": "BSW Shop"
    },
    {
        "id": 2,
        "name": "BSW ERP"
    },
]

export async function getServers() {
    // const [rows] = await pool.query("SELECT * FROM servers")
    // return rows
    return servers;
}


export async function getServer(id) {
    // const [rows] = await pool.query("SELECT * FROM servers WHERE id = ?", [id])
    // return rows
    return servers.find(server => server.id === id)
}
