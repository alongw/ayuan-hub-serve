import express from 'express'
import images from './../utils/images'

const router = express.Router()

router.post('/', (req, res) => {
    const protocol = req.protocol
    const host = req.get('host')
    const imgs = images().map((file) => ({
        url: `${protocol}://${host}/images/${file}`,
        name: file
    }))
    res.send(imgs)
})

export default router
