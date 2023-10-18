import express from "express";

import { getServers, getServer } from '../controllers/serverController.js'

export const serverRouter = express.Router()

serverRouter.get('/', async (req, res) => {
    const servers = await getServers();
    res.status(200).send(servers)
})

serverRouter.post('/', async (req,res) => {
    const body = req.body
    if(!body) {
        res.status(404).send('kein body uebergeben')
    }

    res.status(201).send('server wurde angelegt')
})

serverRouter.get('/:id', async (req, res) => {
    const id = +req.params.id
    const server = await getServer(id)
    if(!server) {
        res.status(404).send('not found')		
    }
    res.status(200).send(server)
})


