import { Schema } from 'mongoose'

export const UserSchema = new Schema ({
  id: {
    type: String
  },
  cp: {
    amount: {
      type: Number,
    },
    used: {
      type: Number,
    }
  },
  investment: [Number]
})