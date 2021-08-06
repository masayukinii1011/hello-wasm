const js = import("./node_modules/@msykn/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});