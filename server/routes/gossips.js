import express from 'express'

import { getGossips, createGossip, deleteGossip } from '../controllers/gossips.js'

const router = express.Router()

router.get('/', getGossips)
router.post('/', createGossip)
router.delete('/:id', deleteGossip)

export default router