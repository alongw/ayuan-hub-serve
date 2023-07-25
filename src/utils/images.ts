import fs from 'fs'
import path from 'path'

const getImg = () => {
    return fs
        .readdirSync(path.join('./images'))
        .filter((file) => /\.(png|jpe?g|gif)$/.test(file))
}

export default getImg
