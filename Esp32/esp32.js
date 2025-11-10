import { db } from "../js/firebase.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const tempRef = ref(db, 'sensor/temperatura');
onValue(tempRef, (snapshot) => {
    const valor = snapshot.val();
    document.getElementById('temp').innerText = valor + " °C"
});