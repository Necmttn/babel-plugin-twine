import * as babel from 'babel-core';


export default function twine() {
  return {
    name: 'twine',
    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World';
        }
      }
    }
  };
}
