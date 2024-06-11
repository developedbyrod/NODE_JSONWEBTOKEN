import express from "express"

import { AppDataSource } from "./config/dataSource"
import AppError from "./exceptions/AppError"
import usersRouter from "./routes/users/user.routes"
import "reflect-metadata"

const PORT = 3000
const app = express()
app.use(express.json())

app.use("/api/user", usersRouter)


AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started At Port: ${PORT}`)
    })
  })

  .catch((error) => {
    console.log(error)
    throw new AppError("Serve coulnt start.", 500)
  })
