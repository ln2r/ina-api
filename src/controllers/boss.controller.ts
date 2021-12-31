import { Request, Response } from "express"
import { BossModel } from '../models/boss.model'

export class BossController {
  public async root (req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}${req.url}`)
      console.debug(`[API] query: ${req.params.query}`)

      const query = new RegExp(req.params.query, "i")
      const db = await BossModel.find({name: query})
      console.debug(`[API] found: ${db.length}`);
      
      if (db.length === 0) {
        return res.status(404).json({
          status: 404,
          body: "Not Found",
        })
      }

      return res.status(200).json({
        status: 200,
        body: db,
      })
    } catch (error) {
      if (error) {
        return res.status(500).json({
          status: 500,
          body: error.message,
        })
      }
    }
  }

  public async time(req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}${req.url}`)
      console.debug(`[API] query: ${req.params.query}`)

      const query = req.params.query
      const db = await BossModel.find({}, 'name time')

      // filtering data
      const response = []
      db.map(boss => {
        if (boss.time[query].length !== 0) {
          response.push({
            name: boss.name,
            time: boss.time[query]
          })
        }
      })

      return res.status(200).json({
        status: 200,
        body: response
      })
    } catch (error) {
      if (error) {
        return res.status(500).json({
          status: 500,
          body: error.message,
        })
      }
    }
  }
}

export const bossController = new BossController()