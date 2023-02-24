import Gossip from '../models/gossips.js'
import mongoose from 'mongoose'

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

export const updateGossip = async (req, res) => {
  const { id: _id } = req.params
  const gossip = req.query

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No gossip with id: ${_id}`)

  const updatedGossip = await Gossip.findByIdAndUpdate(_id, { ...gossip, _id }, { new: true });

  res.json(updatedGossip)
}

export const deleteGossip = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No gossip with id: ${id}`)

  await Gossip.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully' })
}