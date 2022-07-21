import express from 'express'
import config from 'config'
import connection from './utils/connection'
import logger from './utils/logger'
import router from './routes'

const port = config.get<number>('port')

const app = express()

app.use(express.json())

app.listen(port, async () => {
  logger.info(`app is running on http://localhost:${port}`)

  await connection();

  app.use(router)
})
