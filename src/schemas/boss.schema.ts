import { Schema } from "mongoose";

export const BossSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  guide: {
    type: String,
  },
  tips: {
    type: [String],
  },
  image: {
    type: String,
  },
  time: {
    monday: {
      type: [String]
    },
    tuesday: {
      type: [String]
    },
    wednesday: {
      type: [String]
    },
    thursday: {
      type: [String]
    },
    friday: {
      type: [String]
    },
    saturday: {
      type: [String]
    },
    sunday: {
      type: [String]
    },
  }
})