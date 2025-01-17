import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4CzyvrJT0rne_vqh3Uwp-nqVW6Oc8V9A",
  authDomain: "kycaml-2511c.firebaseapp.com",
  projectId: "kycaml-2511c",
  storageBucket: "kycaml-2511c.appspot.com",
  messagingSenderId: "701972011723",
  appId: "1:701972011723:web:6a595bef987bede036d94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
