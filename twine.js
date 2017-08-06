import * as babel from 'babel-core';

const options = {
     plugins: ["syntax-jsx"]
}


// babel.transformFile("./__test__/resources/mimir.js", options, function (err, result) {
//     if (err) console.log(err)
// });

// babel.transformFileSync("./__test__/resources/mimir.js", options).code;
export default function twine() {
  return {
    name: 'twine',
    visitor: {
      ImportDefaultSpecifier(path) {
        if (path.node.local.name !== "game") {
          return
        }
        console.log(path.node.local.name);
      },
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World';
        }
      }
    }
  };
}
