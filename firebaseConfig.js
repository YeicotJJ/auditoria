    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
    import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCYbCBWrkiRh4jB8wWO1m9eD6fICRHr6Dc",
        authDomain: "auditoria-afa7b.firebaseapp.com",
        projectId: "auditoria-afa7b",
        storageBucket: "auditoria-afa7b.firebasestorage.app",
        messagingSenderId: "373560346200",
        appId: "1:373560346200:web:503d650d6e4920b98eec2d",
        measurementId: "G-JP2CCCFTXP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);