const obj = {a: 1, b:2, c: 3, soma() { return a + b + c}}

//objeto -> json
console.log(JSON.stringify(obj))
//json é um formato textual

//json -> objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{ "a": 1.7, "c": "string", "b": true, "d": [], "e": {} }'))