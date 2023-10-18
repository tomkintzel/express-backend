import express from "express";

import { getServers, getServerById } from '../controllers/serverController.js'

export const serverRouter = express.Router()

serverRouter.get('/', getServers)

serverRouter.post('/', async (req,res) => {
    const body = req.body
    if(!body) {
        res.status(404).send('kein body uebergeben')
    }

    res.status(201).send('server wurde angelegt')
})

serverRouter.get('/:id', getServerById)


