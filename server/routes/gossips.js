import express from 'express'

import { getGossips, createGossip } from '../controllers/gossips.js'

const router = express.Router()

router.get('/', getGossips)
router.post('/', createGossip)

export default router