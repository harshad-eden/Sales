import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChhKZ6g3bx6wcRiirlb3-XStF1AIigZdk',
  authDomain: 'sales-app-f893f.firebaseapp.com',
  projectId: 'sales-app-f893f',
  storageBucket: 'sales-app-f893f.appspot.com',
  messagingSenderId: '410612547449',
  appId: '1:410612547449:web:552d3d3ed244a8babbf9a8',

  // apiKey: 'AIzaSyDXjB6JznigvqmHjBvNO0lc_sMHRzwA9a4',
  // authDomain: 'sales-app-b93f0.firebaseapp.com',
  // projectId: 'sales-app-b93f0',
  // storageBucket: 'sales-app-b93f0.appspot.com',
  // messagingSenderId: '40375088435',
  // appId: '1:40375088435:web:08a74eb6ca29647f137a46',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(app);
export const auth = getAuth(app);
