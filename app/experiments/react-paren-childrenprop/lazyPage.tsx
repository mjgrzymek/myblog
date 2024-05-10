'use client';
import React, { useState, memo } from 'react';
import { Paren, exampleTree } from '../paren-generator';

function Paren({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? 'bg-red-600' : ''}
      >
        ({' '}
      </span>
      {children}
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? 'bg-red-600' : ''}
      >
        {' '}
        )
      </span>
    </span>
  );
}

function parenTree(node: Paren) {
  return node.map((n, index) => <Paren key={index}>{parenTree(n)}</Paren>);
}

export default function Content() {
  return <main className="">{parenTree(exampleTree)}</main>;
}
