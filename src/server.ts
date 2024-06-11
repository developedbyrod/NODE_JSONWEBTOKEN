import express, { NextFunction, Request, Response } from "express"

import { AppDataSource } from "./config/dataSource"
import AppError from "./exceptions/AppError"
import "reflect-metadata"
import routes from "./routes/routes"

const PORT = 3000
const app = express()
app.use(express.json())

app.use("/api", routes)

app.use((error: Error, request: Request, response: Response, nextFn: NextFunction) => {
  if(error instanceof AppError){
    return response.status(error.httpStatusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

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
