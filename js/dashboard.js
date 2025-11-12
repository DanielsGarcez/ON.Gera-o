// Importa o Firebase e configura
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
    if (user) {
    userEmail.textContent = user.email;
    } else {
    window.location.href = "index.html"; // se não estiver logado, volta
    }
});

window.logout = () => {
    signOut(auth).then(() => {
    window.location.href = "../index.html";
    });
};