import pluginTester from 'babel-plugin-tester'
import twine from '../twine'
import path from 'path'

pluginTester({
  plugin: twine,
  fixtures: path.join(__dirname, '__fixtures__'),
  tests: {
    {
    snapshot: false,
    },
    'does not change code with no identifiers': '"hello";',
    'changes this code': {
      code: 'var hello = "Hello";',
      output: 'var hello = "World";',
    },
    'converts': {
      code: 'import * as game from "./resources/mimir.html"',
      output: 'const game = () => '
    }
  },
});



