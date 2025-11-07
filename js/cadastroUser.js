// Importa o Firebase e configura (deixe igual ao seu firebase.js)
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Função para enviar dados do formulário dos USUÁRIOS
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  if (!form) {
    console.error("Elemento com id 'form-cadastro' não encontrado no HTML!");
    return;
  }

  form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Pega os ID do Formulario de USUÁRIOS
  const nomeCompleto = document.getElementById("nome-completo").value;
  const emailUser = document.getElementById("email").value.trim();
  const senhaUser = document.getElementById("senha").value.trim();
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


    if ( 
        !nomeCompleto ||
        !emailUser ||
        !senhaUser ||
        !cpfNum ||
        !dataNasc ||
        !estadoCivil ||

        !valorRenda ||
        !familiar ||
        !endereco ||
        !numEndereco ||
        !numCep ||
        !cidade ||
        !estado ||
        !numTelefone
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUser);
    if (!emailValido) {
        alert("E-mail inválido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }
    console.log("Cadastro válido! Enviando dados...");

    // Envia para o Banco de Dados dos USUÁRIOS
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

