import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

async function carregarONGs() {
  const params = new URLSearchParams(window.location.search);   // Pega informação do URL
  const categoria = params.get("categoria");                    // extrai a categoria da informação do URL
  const container = document.getElementById("lista-ongs");

  // caso não tenha nada no URL após "categoria=":
  if (!categoria) {
    container.innerHTML = "<p>Nenhuma categoria selecionada.</p>";
    return;
  }

  //vai buscar no banco de dados ongs que batem com a categoria da URL
  try {
    const ongRef = collection(db, "ongs");
    const q = query(ongRef, where("categoria", "==", categoria));

    const snapshot = await getDocs(q);

    container.innerHTML = "";

    // Caso não tenha uma ong cadastrada no banco de dados
    if (snapshot.empty) {
      container.innerHTML = `<p>Nenhuma ONG cadastrada para a categoria: <strong>${categoria}</strong></p>`;
      return;
    }

    // troca o texto do html
    snapshot.forEach((doc) => {
      const ong = doc.data();
      
      container.innerHTML += `
        <div class="card-ong">
        <hr>
          <div class="conatiner">
            <h2>${ong.nome}</h2>
            <p>${ong.descricao}</p>
          </div>
          <button>
            Acessar o site
          </button>
        </div>
      `;
    });
  } catch (e) {
    console.error("Erro ao carregar ONGs:", e);
    container.innerHTML = "<p>Erro ao carregar ONGs.</p>";
  }
}

carregarONGs();
