import './style.css';

async function fetchTransacoes() {
  const response = await fetch('https://api.origamid.dev/json/transacoes.json');
  const data = await response.json();
  console.log(data);
  mostrarTransacoes(data);
}
fetchTransacoes();

interface Transacao {
  nome: string;
  valor: string;
  status: string;
  formaPagamento: string;
  data: string;
  email: string;
}

function mostrarTransacoes(transacoes: Transacao[]) {
  const tabela = document.querySelector('#tabela tbody');
  transacoes.forEach((transacao) => {
    const transacaoHTML = `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.status}</td>
        <td>${transacao.data}</td>
        <td>${transacao.formaPagamento}</td>
        <td>${transacao.valor}</td>
        <td>${transacao.email}</td>
      </tr>
    `;
    if (tabela) tabela.innerHTML += transacaoHTML;
  });
}
