import Gossip from '../models/gossips.js'

export const getGossips = async (req, res) => {
  try {
    const Gossips = await Gossip.find()

    res.status(200).json(Gossips)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}