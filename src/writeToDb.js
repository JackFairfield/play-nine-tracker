//https://play-nine-tracker-default-rtdb.firebaseio.com/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { v4 as uuidv4 } from "uuid";

import {
  doc,
  setDoc,
  Timestamp,
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYiKPRnltEnf-IyJalubkrz7Cnuxq76v4",
  authDomain: "play-nine-tracker.firebaseapp.com",
  databaseURL: "https://play-nine-tracker-default-rtdb.firebaseio.com",
  projectId: "play-nine-tracker",
  storageBucket: "play-nine-tracker.appspot.com",
  messagingSenderId: "737555805906",
  appId: "1:737555805906:web:53407d1705c69f746adf0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPastGames() {
  const gamesCol = collection(db, "data");
  const gamesSnapshot = await getDocs(gamesCol);
  const gamesList = gamesSnapshot.docs.map((doc) => doc.data());
  return gamesList;
}

async function writeToDb(players) {
  try {
    const tempPlayers = players.map((player) => {
      const rounds = Object.keys(player.rounds).map((key) => {
        const round = player.rounds[key];
        return round.score || 0;
      });

      return { name: player.name, rounds };
    });

    const docData = {
      players: tempPlayers,
      timestamp: Timestamp.fromDate(new Date()),
    };

    console.log(docData);

    await setDoc(doc(db, "data", uuidv4()), docData);
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}

export { writeToDb, getPastGames };
