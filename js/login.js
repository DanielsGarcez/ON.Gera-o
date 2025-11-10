// Importa módulos do Firebase
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Captura o clique do botão de login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (email === "" || senha === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      mensagem.textContent = "Login realizado com sucesso!";
      mensagem.style.color = "green";
      // Redirecionar para página protegida
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.error(error.code, error.message);
      mensagem.textContent = "E-mail ou senha inválidos!";
      mensagem.style.color = "red";
    });
});
