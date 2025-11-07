// Importa o Firebase e configura (deixe igual ao seu firebase.js)
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-ONG");

  if (!form) {
    console.error("Formulário de ONG não encontrado!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

  // Pega os ID do Formulario de 
  const nomeOng = document.getElementById("nome-ong").value;
  const numCnpj = document.getElementById("cnpj").value
  const areaAtuacao = document.getElementById("area-atuacao").value
  const descricaoOng = document.getElementById("descricao").value;

  const enderecoOng  = document.getElementById("endereco-ong").value;
  const numEnderecoOng  = document.getElementById("num-endereco-ong").value;
  const numCepOng  = document.getElementById("cep-ong").value;
  const cidadeOng  = document.getElementById("cidade-ong").value;
  const estadoOng  = document.getElementById("estado-ong").value;
  const numTelefoneOng  = document.getElementById("telefone-ong").value;
  const siteOng  = document.getElementById("site-ong").value;

    try {
      // Salva no Firestore em outra coleção
      const docRef = await addDoc(collection(db, "ongs"), {
        nome: nomeOng,
        cnpj: numCnpj,
        atuacao: areaAtuacao,
        descricao: descricaoOng,

        endereco: enderecoOng,
        numedereco: numEnderecoOng,
        numcepong: numCepOng,
        cidade: cidadeOng,
        estado: estadoOng,
        numtelong: numTelefoneOng,
        site: siteOng,

        criadoEm: new Date()
      });

      alert("ONG cadastrada com sucesso! ID: " + docRef.id);
      e.target.reset();

    } catch (erro) {
      console.error("Erro ao cadastrar ONG:", erro);
      alert("Erro ao cadastrar ONG");
    }
  });
});