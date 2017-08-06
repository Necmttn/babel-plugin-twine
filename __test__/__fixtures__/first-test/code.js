import { getGame } from '../../../readFile.js'
import path from 'path'
import React, { Component } from 'react'
import ReactDOM from 'react-dom')
class app extends Component {
    render() {
        const game = require('../../resources/mimir.js')
        return (game)
    }
}


ReactDOM.render(app, document.getElementById('root'))

console.log(app)

// getGame(path.join(__dirname, '../../resources/mimir.html')).then((game) =>{
//     console.log(game)
// }).catch((err) => {
//     console.log(err)
// })
