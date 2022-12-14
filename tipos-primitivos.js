// strings, number (int, floats), boolean (true or false)
//undefined, null, symbol (ES2015)

//como disfarçar aspas dentro de uma string:
let minhaVar = "minha 'string' com aspas simples";
let minhavar2 = 'minha "string" com aspas duplas';

//tirando a prova:
console.log(minhaVar);
console.log(minhavar2);

var minhavar3 = `minha template literal`;
console.log(minhavar3);

//concatenação:
let idade = 40;
// let msg = "eu possuo " + idade + " anos"; (concatenação clássica)
let msg = `eu possuo ${idade} anos`; // (concatenação mais prática usando crase na string)
console.log(msg);
console.log("Hello " + "World!");

//testes de typeof com concatenação:
console.log(typeof msg, typeof idade, typeof minhaVar, " -> o typeof me disse o tipo da varíavel e ainda assim posso escrever algo normalmente nesse console.log", 20);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

//boolean (true or false):
const isValid = false;
console.log(`isValid: ${isValid}`);

let varteste = null;
console.log(varteste);
console.log(typeof varteste); //o JS dá essa falha dizendo que é um object, mas é apenas uma falha que não interfere em nada
varteste = 10;
console.log(typeof varteste, varteste);