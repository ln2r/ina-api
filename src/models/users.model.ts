import { model } from 'mongoose'

import { UsersInterface } from '../interfaces/users.interface'
import { UserSchema } from '../schemas/users.schema'

export const UsersModel = model<UsersInterface>("Users", UserSchema)