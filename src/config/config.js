import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBJSzKKLVEZAOwSolHtR-u-x6N-HCVsv2c",
    authDomain: "login-page-92030.firebaseapp.com",
    databaseURL: "https://login-page-92030-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-page-92030",
    storageBucket: "login-page-92030.appspot.com",
    messagingSenderId: "754679709402",
    appId: "1:754679709402:web:f654ce434c7744def6efe3",
    measurementId: "G-D628K7HHCV"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = getAuth(app)
const analytics = getAnalytics(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider, analytics }
