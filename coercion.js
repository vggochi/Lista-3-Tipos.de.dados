// coercion.js
function explainEqual(a,b){
  return `Comparando ${a} (${typeof a}) == ${b} (${typeof b}) → ${a==b}`;
}
function inspectValue(x){
  return {String:String(x),Number:Number(x),Boolean:Boolean(x),isBigInt:typeof x==="bigint"};
}
function compareAll(a,b){
  return {eq:a==b,strict:a===b,obj:Object.is(a,b)};
}
// Demonstração com pares clássicos
[ [0,"0"], [null,undefined], [true,1], ["",0], [NaN,NaN],
  [[],false], [[1],1], ["true",true], [0,false], ["",false] ]
.forEach(([a,b])=>console.log(explainEqual(a,b),inspectValue(a),compareAll(a,b)));
