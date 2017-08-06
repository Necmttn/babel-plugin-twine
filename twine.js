import * as babel from 'babel-core'

export default function twine() {
  return {
    name: 'twine',
    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World';
        }
      },
      JSXIdentifier(path) {
        console.log(path.node)
        if (path.node.name === "tw-storydata") {
          path.node.name = "coolComponent";
        }
        if (path.node.name === "style") {
        }
      },
    }
  };
}
