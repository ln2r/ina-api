import { Router, Request, Response } from 'express'

import { userController } from '../controllers/users.controller';

class UserRoute {
  public router: Router = Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get("/:query", (req: Request, res: Response) => 
      userController.root(req, res)
    )

    this.router.post("/:query", (req: Request, res: Response) => 
      userController.root(req, res)
    )
  }
}

export const userRoute = new UserRoute().router