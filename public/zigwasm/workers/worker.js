const promise = WebAssembly.compileStreaming(fetch('foo.wasm'));

addEventListener('message', async (event) => {
  const result = await WebAssembly.instantiate(await promise);
  const add = result.exports.add;
  console.log(add(event.data, 6));
});
