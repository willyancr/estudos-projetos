import { Transacao } from './interface-transacoes';

export function statusPagamento(transacoes: Transacao[]) {
  let totalPaga = 0;
  let totalRecusada = 0;
  let totalAguardando = 0;
  let totalEstornada = 0;
  transacoes.forEach((transacao) => {
    if (transacao.Status === 'Paga') {
      totalPaga++;
    } else if (transacao.Status === 'Recusada pela operadora de cartão') {
      totalRecusada++;
    } else if (transacao.Status === 'Aguardando pagamento') {
      totalAguardando++;
    } else {
      totalEstornada++;
    }
    updateElemet('paga', totalPaga);
    updateElemet('recusada', totalRecusada);
    updateElemet('aguardando', totalAguardando);
    updateElemet('estornada', totalEstornada);
  });
}

function updateElemet(id: string, total: number) {
  const element = document.querySelector(`#${id}`) as HTMLSpanElement;
  element.textContent = `${total}`;
}
