import { model } from "mongoose";

import { BossInterface } from "../interfaces/boss.interface";
import { BossSchema } from "../schemas/boss.schema";

export const BossModel = model<BossInterface>("Bosses", BossSchema);