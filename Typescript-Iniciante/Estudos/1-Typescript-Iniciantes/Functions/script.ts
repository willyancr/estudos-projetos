//OVERLOAD

//exemplo
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return a.toString() + b.toString();
}

//exemplo
function toNumber(input: number | string) {
  if (typeof input === 'number') {
    return input;
  }
  if (typeof input === 'string') {
    const number = +input;
    if (!isNaN(number)) return number;
  }
  throw 'O valor fornecido não pode ser convertido para um número';
}

console.log(toNumber('222'));
console.log(toNumber(222));

//exemplo
