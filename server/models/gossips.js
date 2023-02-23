import mongoose from 'mongoose'

const gossipShema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://mdbootstrap.com/img/new/standard/nature/184.jpg'
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Gossip = mongoose.model('Gossip', gossipShema)

export default Gossip