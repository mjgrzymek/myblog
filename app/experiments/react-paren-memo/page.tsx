'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const load = <p>Loading...</p>;
const Dynamic = dynamic(() => import('./lazyPage'), { loading: () => load });

export default function Content() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // is there a better way?
    setShow(true);
  }, []);

  return show ? <Dynamic /> : load;
}
