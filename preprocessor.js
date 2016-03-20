const tsc = require('typescript');

module.exports = {
  process(src, path) {
    console.log('compiling... <', path, '>');
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      var out = tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
        },
        path,
        []
      );
      return out;
    }
    return src;
  }
};
