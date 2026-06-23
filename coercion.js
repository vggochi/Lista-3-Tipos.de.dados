// 1. explainEqual(a, b)
function explainEqual(a, b) {
    const res = a == b;
    return `Tipos originais: a (${typeof a}), b (${typeof b}).\n` +
           `Conversão implícita: O JS converte os valores para um tipo comum se necessário.\n` +
           `Resultado final: ${res}. Justificativa: Comparação usando coerção (==).`;
}

// 2. inspectValue(x)
function inspectValue(x) {
    return {
        toString: String(x),
        toNumber: Number(x),
        toBoolean: Boolean(x),
        isBigInt: typeof x === 'bigint'
    };
}

// 3. compareAll(a, b)
function compareAll(a, b) {
    console.log(`a == b  : ${a == b}`);
    console.log(`a === b : ${a === b}`);
    console.log(`Object.is : ${Object.is(a, b)}`);
}

// 4. Script demonstrativo com 10 pares clássicos
const pares = [
    [0, false], ["", false], [null, undefined], [1, "1"], [NaN, NaN],
    [[], false], [{}, "[object Object]"], [0, "-0"], [false, undefined], [1n, 1]
];

console.log("--- Demonstração Exercício 2 ---");
pares.forEach(([a, b], index) => {
    console.log(`\nPar ${index + 1}:`);
    compareAll(a, b);
});

module.exports = { explainEqual, inspectValue, compareAll };

