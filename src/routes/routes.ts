import { Router } from "express";
import authRoutes from "./auth/authRoutes";
import userRoutes from "./user/userRoutes";

const routes = Router();

routes.use("/auth", authRoutes)

export default routes;