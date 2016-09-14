const tsc = require('typescript');

console.log('wat... ', tsc.version);
module.exports = {
  process(src, path) {
    console.log('compiling... <', path, '>');
    console.log('source:', src);
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      var out = tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
          target: tsc.ScriptTarget.ES2015
        },
        path,
        []
      );
      console.log("###UHH: got out:", out);
      return out;
    }
    return src;
  }
};
