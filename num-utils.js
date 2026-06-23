// num-utils.js (versão revisada)

function describeNumber(x) {
  const n = Number(x);

  return {
    inputType: typeof x,
    inputValue: x,
    parsed: n,
    isNaN: Number.isNaN(n),
    isFinite: Number.isFinite(n),
    isSafeInteger: Number.isSafeInteger(n),
  };
}

function toBigIntSafe(x) {
  try {
    return {
      success: true,
      value: BigInt(x),
    };
  } catch (e) {
    return {
      success: false,
      reason: e.message,
    };
  }
}

function compareNumeric(a, b) {
  const na = Number(a);
  const nb = Number(b);

  if (Number.isNaN(na) || Number.isNaN(nb)) {
    return {
      ok: false,
      reason: "invalid number",
      a: na,
      b: nb,
    };
  }

  return {
    ok: true,
    diff: na - nb,
  };
}

// Demonstração
const inputs = [
  "42",
  "0xFF",
  "1e3",
  null,
  undefined,
  "abc",
  "9999999999999999999999",
];

inputs.forEach((v) => {
  console.log("INPUT:", v);
  console.log("describeNumber:", describeNumber(v));
  console.log("toBigIntSafe:", toBigIntSafe(v));
  console.log("----");
});

console.log("compareNumeric:", compareNumeric("10", "20"));
