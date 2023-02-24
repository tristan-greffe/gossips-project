import express from 'express'

import { getGossips, createGossip, deleteGossip, updateGossip } from '../controllers/gossips.js'

const router = express.Router()

router.get('/', getGossips)
router.post('/', createGossip)
router.patch('/:id', updateGossip)
router.delete('/:id', deleteGossip)

export default router