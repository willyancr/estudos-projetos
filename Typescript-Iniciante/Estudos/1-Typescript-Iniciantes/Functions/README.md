Em TypeScript, o conceito de overload (sobrecarga) refere-se à capacidade de uma função ter múltiplas assinaturas com diferentes tipos de parâmetros e/ou números de parâmetros. Isso permite que a função seja chamada de maneira flexível, aceitando diferentes tipos de argumentos e retornando resultados apropriados com base nos parâmetros fornecidos.

Para definir uma sobrecarga em TypeScript, você pode declarar a assinatura da função várias vezes com diferentes tipos de parâmetros, mas com o mesmo nome. O compilador TypeScript irá então inferir o tipo correto com base nos argumentos passados durante a chamada da função.

Aqui está um exemplo simples de como você pode usar sobrecarga em TypeScript:

```typescript
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: any, b: any): any {
        return a + b;
    }

    console.log(add(1, 2)); // Saída: 3
    console.log(add('Hello', 'World')); // Saída: HelloWorld
```
Neste exemplo, a função add é sobrecarregada com duas assinaturas diferentes: uma que aceita dois números e retorna um número, e outra que aceita duas strings e retorna uma string. Durante a chamada da função, o TypeScript irá inferir qual versão da função add deve ser executada com base nos tipos dos argumentos passados.