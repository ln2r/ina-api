import { Schema } from 'mongoose'

export const NodesSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  cp: {
    type: Number,
  },
  zone: {
    type: String,
  },
  manager: {
    type: String,
  },
  workload: {
    type: Number,
  },
  investment: {
    interest: {
      type: Number,
    },
    type: {
      type: String,
    },
  },
  main: {
    type: String,
  },
  sub: [String],
  weather: {
    temperature: {
      type: Number,
    }, 
    humidity: {
      type: Number,
    },
    water: {
      type: Number,
    },
  },
  products: [String]
})