'use client';
import { useState } from 'react';

export function StateParen({ children }) {
  const [hovered, setHovered] = useState(false);
  const onHover = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <span className={hovered ? 'bg-red-600' : ''} onMouseEnter={onHover} onMouseLeave={onLeave}>
        (
      </span>
      {children}
      <span className={hovered ? 'bg-red-600' : ''} onMouseEnter={onHover} onMouseLeave={onLeave}>
        )
      </span>
    </>
  );
}
