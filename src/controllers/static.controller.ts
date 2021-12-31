import { Request, Response } from "express"
import { resolve } from 'path'
import { existsSync } from 'fs'

export class StaticController {
  public async root (req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}${req.url}`)
      console.debug(`[API] query: ${req.params.query}`)

      const path = resolve(__dirname, `../../statics/${req.params.query}`)
      console.debug(`[API] path: ${path}`)
      console.debug(`[API] status: ${existsSync(path)}`)

      if (existsSync(path)) {
        res.set('Content-Type', 'image/jpg')
        res.status(200).sendFile(path)
      } else {
        res.status(404).json({
          status: 404,
          message: 'Not Found',
        })
      }
    } catch (error) {
      if (error) {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: error.message
        })
      }
    }
  }
}

export const staticController = new StaticController()