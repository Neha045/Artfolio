import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AUTH_DOMAIN}`,
    databaseURL: `${process.env.DATABASE_URL}`,
    projectId: `fire-gram-1cdde`,
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.API_ID}`
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore =firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ projectStorage, projectFirestore, timestamp};