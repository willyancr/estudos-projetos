//exemplo
//função para verificar se é string
function isString(value: unknown): value is string {
  return true;
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toLocaleLowerCase());
  }
}

handleData('EU SOU WILLYAN');
