import { Request, Response } from "express"
import { UsersInterface } from "interfaces/users.interface"
import { UsersModel } from "../models/users.model"

export class UsersController {
  public async root(req: Request, res: Response) {
    try {
      console.debug(`[API] hitting: ${req.baseUrl}${req.url}`)
      console.debug(`[API] query: ${req.params.query}`)
      console.debug(`[API] method: ${req.method}`)

      let db:UsersInterface;

      // user update handler
      if (req.method === "POST") {
        // check db
        db = await UsersModel.findOne({id: req.params.query})
        console.debug(`[API] exist? ${ (db !== null)? true : false }`)

        if (db !== null) {
          if (req.body.cp.amount) db.cp.amount = req.body.cp.amount
          if (req.body.cp.used) db.cp.used = req.body.cp.used
          if (req.body.investment) db.investment = req.body.investment

          await UsersModel.updateOne({id: req.params.query}, db)
        } else {
          const usedCp = (req.body.cp.used)? req.body.cp.used : 0
          const maxCp = (req.body.cp.amount)? req.body.cp.amount : 0
          const investment = (req.body.investment)? req.body.investment : []

          await UsersModel.create({
            id: req.params.query,
            cp: {
              amount: maxCp,
              used: usedCp,
            },
            investment: investment,
          })
        }

        return res.status(200).json({
          status: 200,
          body: 'Data Updated'
        })
      }

      // GET handler
      db = await UsersModel.findOne({id: req.params.query})

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

export const userController = new UsersController()