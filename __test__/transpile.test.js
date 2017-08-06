import { getGame } from '../readFile.js'
import path from 'path'



test('gets content', () => {
    expect(getGame(path.join(__dirname, './resources/mimir.html'))).resolves.toBe('lemon')

})
