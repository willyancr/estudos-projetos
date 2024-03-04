import { Transacao } from './interface-transacoes';

export function totalCompras(transacoes: Transacao[]) {
  let total = 0;
  transacoes.forEach((transacao) => {
    let valor = parseFloat(
      transacao['Valor (R$)'].replace(/[^\d,]/g, '').replace(',', '.'),
    );
    if (!isNaN(valor)) {
      total += valor;
    }
  });
  const totalElement = document.querySelector(
    '#total-compras',
  ) as HTMLSpanElement;
  totalElement.textContent = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
