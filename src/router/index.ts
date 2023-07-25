import express from 'express'
const router = express.Router()
import getImagesRouter from './getImages'

router.use('/getImages', getImagesRouter)

export default router
