import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAmTpFxEl0hugCan_67CGbgCsN-mKHU1Wo',
  authDomain: 'live-crypto-dashboard.firebaseapp.com',
  projectId: 'live-crypto-dashboard',
  storageBucket: 'live-crypto-dashboard.appspot.com',
  messagingSenderId: '290119391378',
  appId: '1:290119391378:web:2937372a5964fa1824ae4b',
};

export const app = initializeApp(firebaseConfig);