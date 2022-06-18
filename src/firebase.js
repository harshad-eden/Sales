import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChhKZ6g3bx6wcRiirlb3-XStF1AIigZdk',
  authDomain: 'sales-app-f893f.firebaseapp.com',
  projectId: 'sales-app-f893f',
  storageBucket: 'sales-app-f893f.appspot.com',
  messagingSenderId: '410612547449',
  appId: '1:410612547449:web:552d3d3ed244a8babbf9a8',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
