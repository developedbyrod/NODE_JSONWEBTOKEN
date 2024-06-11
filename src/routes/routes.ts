import { Router } from "express";
import authRoutes from "./auth/authRoutes";

const routes = Router();

routes.use("/auth", authRoutes)

export default routes;