/* eslint-disable no-constant-condition */
const fs = require('fs');
const source = fs.readFileSync('./json.wasm');

const memory = new WebAssembly.Memory({ initial: 17, maximum: 100 });

WebAssembly.instantiate(source, { env: { memory } }).then((result) => {
  const { reverseNames } = result.instance.exports;

  function reverseNamesNice(data) {
    const input = JSON.stringify(data);

    const memoryView = new Uint8Array(memory.buffer);
    const { written } = new TextEncoder().encodeInto(input, memoryView);

    const outputLength = reverseNames(0, written, memoryView.byteLength);

    const outputView = new Uint8Array(memory.buffer, 0, outputLength);
    const output = new TextDecoder().decode(outputView);
    return JSON.parse(output);
  }

  function inspectMemory() {
    const pageSize = 2 ** 16;

    console.log('pages:', memory.buffer.byteLength / pageSize);
    const memoryView = new Uint8Array(memory.buffer);
    const used = [];
    for (let i = 0; i < memoryView.length; i++) {
      if (memoryView[i]) {
        const start = i;

        while (true) {
          const maxLookForwardBytes = 300;
          const bytesLeft = memoryView.length - i;
          const lookForwardBytes = Math.min(maxLookForwardBytes, bytesLeft);
          const forwardView = new Uint8Array(memory.buffer, i, lookForwardBytes);
          if (forwardView.every((byte) => byte === 0)) break;

          i++;
        }

        used.push([start, i - start]);
      }
    }
    console.log(
      used.map(
        ([start, length]) =>
          `page:${Math.floor(start / pageSize)} offset:${start % pageSize} bytes:${length}`
      ),
      '\n'
    );
  }

  inspectMemory();
  reverseNamesNice([{ name: 'Jane', id: 2 }]);
  inspectMemory();
});
