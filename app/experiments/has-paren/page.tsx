import React from 'react';
import { Paren, exampleTree } from '../paren-generator';

function hasParen(node: Paren) {
  return (
    <span className="cont">
      <span className="[.cont:has(>&:hover)>&]:bg-red-600">( </span>
      {node.map((n, index) => (
        <React.Fragment key={index}>{hasParen(n)}</React.Fragment>
      ))}
      <span className="[.cont:has(>&:hover)>&]:bg-red-600"> )</span>
    </span>
  );
}

export default function Content() {
  return <main className="">{hasParen(exampleTree)}</main>;
}
