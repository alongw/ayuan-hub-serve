import logger from './utils/log'
import config from './utils/config'
import express from 'express'
import cors from 'cors'
import rt from './router/index'

const app = express()
app.use(cors())
app.use('/api', rt)
app.use('/images', express.static('images'))

app.listen(config.port, () => {
    logger.info(`阿圆表情包仓库-服务端 在端口${config.port}上运行`)
})
