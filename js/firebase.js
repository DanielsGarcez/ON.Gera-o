// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "ongeneration-178b1",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};

// Inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta para usar em outras páginas
export { db, collection, addDoc };

// Função para enviar dados do formulário dos USUÁRIOS
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  if (!form) {
    console.error("Elemento com id 'form-cadastro' não encontrado no HTML!");
    return;
  }

  form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nomeCompleto = document.getElementById("nome-completo").value;
  const emailUser = document.getElementById("email").value
  const senhaUser = document.getElementById("senha").value
  const cpfNum = document.getElementById("cpf").value;
  const dataNasc = document.getElementById("data-nasc").value;
  const estadoCivil = document.getElementById("estado-civil").value;

  const valorRenda  = document.getElementById("renda").value;
  const familiar  = document.getElementById("composicao-familiar").value;
  const endereco  = document.getElementById("endereco").value;
  const numEndereco  = document.getElementById("num-endereco").value;
  const numCep  = document.getElementById("cep").value;
  const cidade  = document.getElementById("cidade").value;
  const estado  = document.getElementById("estado").value;
  const numTelefone  = document.getElementById("telefone").value;

    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nome: nomeCompleto,
        email: emailUser,
        senha: senhaUser,
        cpf: cpfNum,
        nasc: dataNasc,
        estadoCivil: estadoCivil,

        renda: valorRenda,
        familia: familiar,
        endereco: endereco,
        numeroEndereco: numEndereco,
        cep: numCep,
        cidade: cidade,
        estado: estado,
        telefone: numTelefone,
        criadoEm: new Date()
      });
      alert("Cadastro realizado com sucesso!" + docRef.id);
      e.target.reset();
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro ao cadastrar");
    }
  });
});

// Função para enviar dados do formulário dos ONGs
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-ONG").addEventListener("submit", async (e) => {
  e.preventDefault();

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
      const docRef = await addDoc(collection(db, "ongs"), {
        nome: nomeOng,
        cnpj: numCnpj,
        atuacao: areaAtuacao,
        descricao: descricaoOng,

        endereco: enderecoOng,
        numeroEndereco: numEnderecoOng,
        cep: numCepOng,
        cidade: cidadeOng,
        estado: estadoOng,
        telefone: numTelefoneOng,
        site: siteOng,
        criadoEm: new Date()
      });
      alert("Cadastro da Ong realizado com sucesso!" + docRef.id);
      e.target.reset();
    } catch (erro) {
      console.error("Erro ao cadastrar Ong:", erro);
      alert("Erro ao cadastrar");
    }
  });
});
