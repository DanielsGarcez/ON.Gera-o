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

// Função para enviar dados
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formCadastro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nomeCompleto = document.getElementById("nome-completo").value;
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