const fs = require('fs');
const source = fs.readFileSync('./json.wasm');

WebAssembly.instantiate(source).then((result) => {
  const { reverseNames, memory } = result.instance.exports;

  function reverseNamesNice(data) {
    const input = JSON.stringify(data);

    const memoryView = new Uint8Array(memory.buffer);
    const { written } = new TextEncoder().encodeInto(input, memoryView);

    const outputLength = reverseNames(0, written, memoryView.byteLength);

    const outputView = new Uint8Array(memory.buffer, 0, outputLength);
    const output = new TextDecoder().decode(outputView);
    return JSON.parse(output);
  }

  console.log(
    reverseNamesNice([
      { name: 'John', id: 1 },
      { name: 'Jane', id: 2 },
    ])
  );
});
