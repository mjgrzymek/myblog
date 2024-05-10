import seedrandom from 'seedrandom';

export type Paren = Paren[];

const maxDepth = 200;

function nested(n: number): Paren {
  const root: Paren = [];
  const availableParents = [{ node: root, depth: 0 }];
  const sr = seedrandom('paren-generator');

  function randomParent() {
    const i = Math.floor(sr() * availableParents.length);
    return availableParents[i];
  }

  for (let i = 0; i < n; i++) {
    const { node, depth } = randomParent();
    const child: Paren = [];
    node.push(child);
    if (depth < maxDepth) {
      availableParents.push({ node: child, depth: depth + 1 });
    }
  }

  return root;
}

export const exampleTree = nested(30000);
