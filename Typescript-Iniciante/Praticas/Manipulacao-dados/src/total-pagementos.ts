import { Transacao } from './interface-transacoes';

export function meioDePagamento(transacoes: Transacao[]) {
  let totalCartao = 0;
  let totalBoleto = 0;
  transacoes.forEach((transacao) => {
    if (transacao['Forma de Pagamento'] === 'Cartão de Crédito') {
      totalCartao = (totalCartao || 0) + 1;
      const totalElementCartao = document.querySelector(
        '#cartao-credito',
      ) as HTMLSpanElement;
      totalElementCartao.textContent = `${totalCartao}`;
    } else {
      totalBoleto = (totalBoleto || 0) + 1;
      const totalElementBoleto = document.querySelector(
        '#boleto',
      ) as HTMLSpanElement;
      totalElementBoleto.textContent = `${totalBoleto}`;
    }
  });
}
