import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8ulgbXLsAOq0C73m5PYXuWbkbFJDu6RU",
    authDomain: "vue-ex-6b69c.firebaseapp.com",
    databaseURL: "https://vue-ex-6b69c.firebaseio.com",
    projectId: "vue-ex-6b69c",
    storageBucket: "vue-ex-6b69c.appspot.com",
    messagingSenderId: "280041007923"
  };
  const firebaseApp =  firebase.initializeApp(config);
  export default firebaseApp.firestore();