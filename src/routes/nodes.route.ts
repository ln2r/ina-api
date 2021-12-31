import { Router, Request, Response } from 'express'

import { nodesController } from '../controllers/nodes.controller';

class NodesRoute {
  public router: Router = Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get("/:query", (req: Request, res: Response) => 
      nodesController.root(req, res)
    )

    this.router.get("/id/:query", (req: Request, res: Response) => 
      nodesController.getById(req, res)
    )
  }
}

export const nodesRoute = new NodesRoute().router