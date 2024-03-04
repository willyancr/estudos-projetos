export interface Transacao {
  Nome: string;
  Email: string;
  Status: string;
  Data: String;
  ['Valor (R$)']: string;
  ['Forma de Pagamento']: string;
}
