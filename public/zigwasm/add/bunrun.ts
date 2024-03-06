// @ts-nocheck
const source = await Bun.file('add.wasm').arrayBuffer();
const result = await WebAssembly.instantiate(source, { env: { print: (x) => console.log(x) } });
const add = result.instance.exports.add;
add(1, 2);
