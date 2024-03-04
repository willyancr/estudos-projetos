import './style.css';
import { Transacao } from './interface-transacoes';
import { totalCompras } from './total-compras';
import { meioDePagamento } from './total-pagementos';
import { statusPagamento } from './status-pagamento';
import { diaComMaisVenda } from './dia-mais-venda'

async function fetchTransacoes() {
  const response = await fetch('https://api.origamid.dev/json/transacoes.json');
  const data = await response.json();
  mostrarTransacoes(data);
  totalCompras(data);
  meioDePagamento(data);
  statusPagamento(data);
  diaComMaisVenda(data);
}
fetchTransacoes();

function mostrarTransacoes(transacoes: Transacao[]) {
  const tabela = document.querySelector('#tabela tbody') as HTMLTableElement;
  transacoes.forEach((transacao) => {
    const transacaoHTML = `
      <tr>
        <td>${transacao.Nome}</td>
        <td>${transacao.Email}</td>
        <td>R$ ${transacao['Valor (R$)']}</td>
        <td>${transacao['Forma de Pagamento']}</td>
        <td>${transacao.Status}</td>
      </tr>
    `;
    tabela.innerHTML += transacaoHTML;
  });
}
