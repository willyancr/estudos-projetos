import { Transacao } from './interface-transacoes';

interface Status {
  [key: string]: number;
}

export function statusPagamento(transacoes: Transacao[]) {
  const pagamentos = transacoes.map((transacao) => transacao.Status);
  const total = pagamentos.reduce((acc: Status, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  updateElemet('paga', total.Paga);
  updateElemet('recusada', total['Recusada pela operadora de cartão']);
  updateElemet('aguardando', total['Aguardando pagamento']);
  updateElemet('estornada', total.Estornada);
}

function updateElemet(id: string, total: number) {
  const element = document.querySelector(`#${id}`) as HTMLSpanElement;
  element.textContent = `${total}`;
}
