'use client';
import React, { useState, memo } from 'react';
import { Paren, exampleTree } from '../paren-generator';

const ParenMemo = memo(function Paren({ node }: { node: Paren }) {
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
      {node.map((n, index) => (
        <ParenMemo key={index} node={n} />
      ))}
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
});

export default function Content() {
  return (
    <main className="">
      <ParenMemo node={exampleTree} />
    </main>
  );
}
