import { Transacao } from './interface-transacoes';

export function diaComMaisVenda(transacoes: Transacao[]) {
  let contagemDias: { [key: string]: number } = {};

  transacoes.forEach((transacao) => {
    let dataParts = transacao.Data.split('/');
    let data = new Date(
      parseInt(dataParts[2]),
      parseInt(dataParts[1]) - 1,
      parseInt(dataParts[0]),
    );
    const diaSemana = data.toLocaleString('pt-BR', { weekday: 'long' });
    contagemDias[diaSemana] = (contagemDias[diaSemana] || 0) + 1;
    const diaMaisVendido = Object.keys(contagemDias).reduce((a, b) => {
      return contagemDias[a] > contagemDias[b] ? a : b;
    }, '');
    
    const totalElement = document.querySelector(
      '#dia-com-mais-vendas',
    ) as HTMLSpanElement;
    totalElement.textContent = diaMaisVendido;
  });
}
