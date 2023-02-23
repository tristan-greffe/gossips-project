import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Gossip from './models/gossips.js'

dotenv.config()
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL)
  .then(() => console.log('Mongo connection open '))
  .catch((error) => console.log(error.message))


const seedGossips = [
  {
    author: 'Tristan',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.jpg'
  },
  {
    author: 'Luc',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/023.jpg'
  },
  {
    author: 'Nico',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/111.jpg'
  },
  {
    author: 'Teo',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/002.jpg'
  },
  {
    author: 'Aude',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/022.jpg'
  },
  {
    author: 'Marie',
    content: 'lorem Ipsum is simply dummy text of ver surround me with my volatile form of truth.',
    image: 'https://mdbootstrap.com/img/new/standard/nature/035.jpg'
  },
]

const seedDB = async () => {
  await Gossip.deleteMany({})
  await Gossip.insertMany(seedGossips)
}

seedDB().then(() => {
  mongoose.connection.close()
})