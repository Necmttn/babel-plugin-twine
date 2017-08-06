import { getGame } from '../../../readFile.js'
import path from 'path'


getGame(path.join(__dirname, '../../resources/mimir.html')).then((game) =>{
    console.log(typeof game)
}).catch((err) => {
    console.log(err)
})
