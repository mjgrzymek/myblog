const fs = require('fs');
const source = fs.readFileSync('./strings.wasm');

WebAssembly.instantiate(source).then((result) => {
  const { doubleString, memory } = result.instance.exports;
  const input = 'Hello 🙋 World!';
  const memoryView = new Uint8Array(memory.buffer);
  const { written } = new TextEncoder().encodeInto(input, memoryView);
  console.log(`written: ${written}, input.length: ${input.length}`);
  const outputLength = doubleString(0, written, memoryView.byteLength);
  const outputView = new Uint8Array(memory.buffer, 0, outputLength);
  const output = new TextDecoder().decode(outputView);
  console.log(output);
});
