import path from 'path'
import fs from 'fs'

function getGame(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                console.log('Error occur while reading file: ', err)
            }
            resolve(data)
        })
   })
}


export {
    getGame
}
