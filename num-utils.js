// num-utils.js
function describeNumber(x){
  const n=Number(x);
  return {type:typeof x,num:n,isNaN:isNaN(n),isInf:!isFinite(n),safe:Number.isSafeInteger(n)};
}
function toBigIntSafe(x){
  try{return{success:true,value:BigInt(x)}}catch(e){return{success:false,reason:e.message}};
}
function compareNumeric(a,b){
  const na=Number(a),nb=Number(b);
  return isNaN(na)||isNaN(nb)?"impossível":na-nb;
}
// Demonstração
["42","0xFF","1e3",null,undefined,"abc","9999999999999999999999"].forEach(v=>{
  console.log(describeNumber(v),toBigIntSafe(v));
});
console.log(compareNumeric("10","20"));
