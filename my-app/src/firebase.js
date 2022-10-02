
  const firebaseConfig = {
    apiKey: "AIzaSyD5lFvWc_LauZpc86zCyaIoHvz7zr-oZfY",
    authDomain: "howdyhack2022.firebaseapp.com",
    projectId: "howdyhack2022",
    storageBucket: "howdyhack2022.appspot.com",
    messagingSenderId: "567589921510",
    appId: "1:567589921510:web:225baeab19bbc94eb15127"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let db = firebase.firestore();