import { Router, Request, Response } from 'express'

import { staticController } from '../controllers/static.controller'

class StaticRoute {
  public router: Router = Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get("/:query", (req: Request, res: Response) => 
      staticController.root(req, res)
    )
  }
}

export const staticRoute = new StaticRoute().router