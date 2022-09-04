
// const firebase = require('firebase');

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// module.exports = db;

const admin = require('firebase-admin');
const serviceAccount = require('../auth/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
