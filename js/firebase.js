// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBu-IkIoEcNfEtX9sjsGR3kv2_QRtJl7FU",
  authDomain: "ongeneration-178b1.firebaseapp.com",
  projectId: "ongeneration-178b1",
  storageBucket: "ongeneration-178b1.firebasestorage.app",
  messagingSenderId: "432265012451",
  appId: "1:432265012451:web:57f9377800c36111d8d1d6",
};

// Inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
