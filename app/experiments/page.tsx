// list of subdirectories
import { promises as fs } from 'fs';
import Link from 'next/link';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default async function Experiments() {
  const thisDir = dirname(fileURLToPath(import.meta.url));
  const entries = await fs.readdir(thisDir, { withFileTypes: true });
  const directories = entries.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

  return (
    <main className="prose">
      <h1 className="text-white">Experiments</h1>
      <ul>
        {directories.map((name) => (
          <li key={name}>
            <Link href={`/experiments/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <p>The pages look different at the end, but all the parentheses seem to be there. 🤔</p>
    </main>
  );
}
