import Gossip from '../models/gossips.js'

export const getGossips = async (req, res) => {
  try {
    const Gossips = await Gossip.find()

    res.status(200).json(Gossips)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createGossip = async (req, res) => {
  const gossip = req.query
  const newGossip = new Gossip(gossip)

  try {
    await newGossip.save()

    res.status(201).json(newGossip)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}