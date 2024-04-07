import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAM2sMAqkpVCxjJuTxnNlEuz6itCU3FbvA",
    authDomain: "workspace-planning-votes.firebaseapp.com",
    projectId: "workspace-planning-votes",
    storageBucket: "workspace-planning-votes.appspot.com",
    messagingSenderId: "995018238220",
    appId: "1:995018238220:web:881f2150b98b43a61c4129"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };

