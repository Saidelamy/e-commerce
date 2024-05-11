import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBPh5r39GTURXCaxBz8IQvZlm3A17C_NWs',
  authDomain: 'maltimart-dcdb5.firebaseapp.com',
  projectId: 'maltimart-dcdb5',
  storageBucket: 'maltimart-dcdb5.appspot.com',
  messagingSenderId: '240403577930',
  appId: '1:240403577930:web:c8890401b27bdf02e5bab3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
