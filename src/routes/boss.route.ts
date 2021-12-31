import { Router, Request, Response } from 'express'

import { bossController } from '../controllers/boss.controller';

class BossRoute {
  public router: Router = Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get("/:query", (req: Request, res: Response) => 
      bossController.root(req, res)
    )

    this.router.get("/day/:query", (req: Request, res: Response) =>
      bossController.time(req, res)
    )
  }
}

export const bossRoute = new BossRoute().router