import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAwutvOQ3ltUJU2zXKV7gj0Pn5eDFlJTDU",
  authDomain: "netflix-aa24d.firebaseapp.com",
  databaseURL: "https://netflix-aa24d.firebaseio.com",
  projectId: "netflix-aa24d",
  storageBucket: "netflix-aa24d.appspot.com",
  messagingSenderId: "712432194599",
  appId: "1:712432194599:web:f38b50f180035b2e886a02",
  measurementId: "G-V7Q5873CK4"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
