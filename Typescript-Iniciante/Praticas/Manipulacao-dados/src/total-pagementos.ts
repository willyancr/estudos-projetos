import { Transacao } from './interface-transacoes';

interface Pagamento {
  [key: string]: number;
}
export function meioDePagamento(transacoes: Transacao[]) {
  const pagamentos = transacoes.map(
    (transacao) => transacao['Forma de Pagamento'],
  );
  const total = pagamentos.reduce((acc: Pagamento, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  const totalElementCartao = document.querySelector(
    '#cartao-credito',
  ) as HTMLSpanElement;
  const totalElementBoleto = document.querySelector(
    '#boleto',
  ) as HTMLSpanElement;
  
  totalElementCartao.textContent = `${total['Cartão de Crédito']}`;
  totalElementBoleto.textContent = `${total.Boleto}`;
}
