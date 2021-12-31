import * as express from 'express'
import { userRoute } from './routes/users.route';
import { nodesRoute } from './routes/nodes.route';
import { bossRoute } from './routes/boss.route';
import { staticRoute } from './routes/static.route';

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
  }

  private config(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))

    // routing
    this.app.use("/nodes", nodesRoute)
    this.app.use("/user", userRoute)
    this.app.use("/boss", bossRoute)
    this.app.use("/static", staticRoute)

    this.app.use("/", (req, res) => {
      res.status(200).json({
        status: 200,
        body: 'Hello from ina-api'
      })
    })
  }
}

export default new App().app;