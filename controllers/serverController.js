import express from "express";
import {getAllServers, getServer} from '../models/serverModel.js'

export const getServers = async(req,res) => {
    const servers = await getAllServers()
    res.status(200).json(servers)
}

export const getServerById = async(req,res) => {
    const id = +req.params.id
    const server = await getServer(id)
    res.status(200).json(server)
}
