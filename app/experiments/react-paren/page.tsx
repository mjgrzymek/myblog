'use client';
import React, { useState } from 'react';
import { Paren, exampleTree } from '../paren-generator';

function HasParen({ node }: { node: Paren }) {
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
        <HasParen key={index} node={n} />
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
}

export default function Content() {
  return (
    <main className="">
      <HasParen node={exampleTree} />
    </main>
  );
}
