import express from 'express'

import { getGossips } from '../controllers/gossips.js'

const router = express.Router()

router.get('/', getGossips)


export default router