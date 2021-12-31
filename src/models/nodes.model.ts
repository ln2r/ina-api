import { model } from 'mongoose'

import { NodeInterface } from '../interfaces/nodes.interface'
import { NodesSchema } from '../schemas/nodes.schema'

// https://www.kindacode.com/article/node-mongoose-typescript-defining-schemas-and-models/

export const NodesModel = model<NodeInterface>("Nodes", NodesSchema)