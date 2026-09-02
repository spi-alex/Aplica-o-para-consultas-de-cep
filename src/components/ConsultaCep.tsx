import { useState } from "react";

type endereco = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export default function ConsultarCep() {
  const [Cep, SetCep] = useState("");
  const [Endereco, SetEndereco] = useState<endereco | null>(null);
  const [Carregamento, SetCarregamento] = useState(false);
  const [Erro, SetErro] = useState("");

  async function ConsultarEndereco() {
    const cepNovo = Cep.replace(/\D/g, "");

    if (cepNovo.length !== 8) {
      SetErro("Insira um CEP válido com 8 números, Porfavor");
      SetEndereco(null);
      return;
    }

    SetCarregamento(true);
    SetEndereco(null);
    SetErro("");

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepNovo}/json/`
      );

      const dados = await resposta.json();

      if (dados.erro) {
        SetErro("CEP not found bobao");
        return;
      }

      SetEndereco(dados);
    } catch {
      SetErro("Erro ao consultar o CEP");
    } finally {
      SetCarregamento(false);
    }
  }

  return (
    <section>
      <h1>Consulta de CEP</h1>

      <input
        type="text"
        placeholder="Insira o CEP"
        value={Cep}
        onChange={(e) => SetCep(e.target.value)}
      />

      <button onClick={ConsultarEndereco}>
        Buscar endereço
      </button>

      {Carregamento && <p>Buscando endereço...</p>}
      {Erro && <p>{Erro}</p>}

      {Endereco && (
        <div>
          <p>Logradouro: {Endereco.logradouro}</p>
          <p>Bairro: {Endereco.bairro}</p>
          <p>Cidade: {Endereco.localidade}</p>
          <p>Estado: {Endereco.uf}</p>
        </div>
      )}
    </section>
  );
}
