import express from "express";

export const serverRouter = express.Router()

serverRouter.get('/', async (req, res) => {
	console.log('ich bin server lan')
	res.status(200).send('ich bnin auch noch hier')
})

serverRouter.post('/', async(req,res) => {
	const body = req.body

	if(!body) {
		res.status(404).send('kein body uebergeben')
	}

	res.status(201).send('server wurde angelegt')
})

serverRouter.get('/:id', async (req, res) => {
	console.log('ich bin ein einzelner Server')
	const id = await req.params.id
	res.status(200).send(`{"id": "${id}"}`)
})


