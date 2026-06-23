// linter.js
function lint(code){
  const r=/(var|let|const)\s+([a-zA-Z_]\w*)/g;let m;
  while((m=r.exec(code))){
    if(m[1]==="var")console.log(`[WARN] uso de var → ${m[2]}`);
    if(m[1]==="const"&&!/^[A-Z_]+$/.test(m[2]))
      console.log(`[WARN] const ${m[2]} não está em UPPER_SNAKE_CASE`);
    if(m[1]!=="const"&&!/^[a-z][a-zA-Z0-9]*$/.test(m[2]))
      console.log(`[WARN] variável ${m[2]} não está em camelCase`);
  }
}
lint("var X=1; const pi=3.14; let Nome=2;");
