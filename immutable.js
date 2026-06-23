// immutable.js
const cloneShallow=o=>({...o});
const cloneDeep=o=>JSON.parse(JSON.stringify(o));
function setImmutable(o,p,v){
  let c=cloneDeep(o),t=c;
  [].concat(p).forEach((k,i,a)=>{if(i===a.length-1)t[k]=v;else t=t[k]||(t[k]={});});
  return c;
}
// Demonstração
let obj={a:{b:2}};
console.log("Shallow:",cloneShallow(obj));
console.log("Deep:",cloneDeep(obj));
console.log("Immutable:",setImmutable(obj,["a","b"],3));
