import { db } from './firebaseConfig.js';
import { doc, setDoc } from 'firebase/firestore';

// Función para guardar los datos en Firestore
async function saveToFirestore() {
    // Obtén los valores del formulario
    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;

    // Genera un ID único (dni + fecha y hora actual)
    const date = new Date();
    const dateTime = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours()
    .toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    const uniqueId = `${dni}_${dateTime}`;

    try {
        // Escribe los datos en Firestore
        await setDoc(doc(db, 'usuarios', uniqueId), {
            dni: dni,
            password: password,
            timestamp: serverTimestamp() // Añade un timestamp del servidor
        });
        alert('Datos guardados exitosamente');
    } catch (error) {
        console.error('Error al guardar los datos: ', error);
    }
}