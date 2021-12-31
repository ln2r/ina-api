import { Request, Response } from "express"
import { NodesModel } from '../models/nodes.model'

export class NodesController {
  public async root (req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}${req.url}`)
      console.debug(`[API] query: ${req.params.query}`)

      const query = new RegExp(req.params.query, "i")
      const db = await NodesModel.find({name: query})
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
          body: error.message
        })
      }
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}/id`)
      console.debug(`[API] query: ${req.params.query}`)

      // const query = new RegExp(req.params.query, "i")
      const db = await NodesModel.findOne({id: req.params.query})
      console.debug(`[API] found: ${(db !== null)? true : false}`);
      
      if (db === null) {
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
          body: error.message
        })
      }
    }
  }
}

export const nodesController = new NodesController()