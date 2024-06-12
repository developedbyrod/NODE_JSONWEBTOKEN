import Router from "express"
import { authLogin, authRegister } from "../../controllers/authController"

const authRoutes = Router()

authRoutes.post("/login", authLogin)
authRoutes.post("/register", authRegister)

export default authRoutes