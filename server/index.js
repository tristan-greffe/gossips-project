import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT =  process.env.PORT || 5000


mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))