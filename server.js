import express from 'express'
import { config } from './config/index.js'
import { serverRoutes } from './routes/index.js'
import logger from './utils/logger/winston_config.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors("*"))

const PORT = config.port
let administrator = true

serverRoutes(app)

const server = app.listen(PORT, (err) => {
    if (err) {
        logger.error("Error while starting server")
    } else {
        logger.info(`Servidor http escuchando en el puerto ${server.address().port}
                 Open link to http://127.0.0.1:${server.address().port}`)
    }
})

server.on("error", error => logger.info(`Error en servidor ${error}`))

