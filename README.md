# Consulta de CEP

Aplicação desenvolvida em React com TypeScript que consulta um endereço a partir de um CEP informado pelo usuário, consumindo a API pública ViaCEP. O projeto foi criado como atividade prática sobre consumo de API com fetch e gerenciamento de estado com useState.

---


---

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- CSS

---

## Funcionalidades

- Campo para digitar o CEP e botão para buscar o endereço
- Consulta à API ViaCEP via fetch
- Exibição de logradouro, bairro, cidade e estado
- Remoção automática de pontos e hífens antes do envio à API
- Validação para consultar apenas quando o CEP possuir oito números
- Mensagem de carregamento durante a busca
- Mensagem de erro caso o CEP seja inválido ou não seja encontrado

---

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

### 1. Instalar as dependências

No terminal, rode o comando abaixo para baixar as dependências necessárias:

```
npm install
```

### 2. Rodar o projeto

Após instalar as dependências, execute:

```
npm run dev
```
