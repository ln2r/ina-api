import { config } from "dotenv"
import { resolve } from "path"

import { connect } from 'mongoose'

// loading .env data
config({ path: resolve(__dirname, "../.env") })

import app from "./app" 

connect(process.env.DB_URL, {
}, () => {
  console.log(`[DB] Connected`)
})

app.listen(process.env.API_PORT, () => {
  console.log(`[API] Server started @ ${process.env.API_PORT}`)
})