import { Router } from "express"
import authMiddlware from "../../middlewares/authMiddleware"
import {login} from "../../controllers/authController"

const usersRouter = Router()

usersRouter.post("api/user/login", authMiddlware, login)


export default usersRouter