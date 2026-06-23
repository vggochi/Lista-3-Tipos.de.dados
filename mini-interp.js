// mini-interp.js
function run(ast){
  let scopes=[{}];
  ast.forEach((n,i)=>{
    if(n.type==="declare")scopes[0][n.name]=undefined;
    if(n.type==="assign")scopes[0][n.name]=n.value;
    if(n.type==="func")scopes.push({}); // suporte a função
    console.log(`Linha ${i+1} → escopo:`,scopes[scopes.length-1]);
  });
}
// Exemplo
run([
  {type:"declare",name:"x"},
  {type:"assign",name:"x",value:3},
  {type:"func",name:"soma"},
  {type:"assign",name:"resultado",value:5}
]);
