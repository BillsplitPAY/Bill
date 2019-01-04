import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDqisPjS_aCsR4Z9oz5B9Q8SnFX3VnrI9k",
    authDomain: "bill-b84a6.firebaseapp.com",
    databaseURL: "https://bill-b84a6.firebaseio.com",
    projectId: "bill-b84a6",
    storageBucket: "bill-b84a6.appspot.com",
    messagingSenderId: "1057864138139"
  };
  firebase.initializeApp(config);

  //export default firebaseConfig;

  function storeHighScore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}
// //Storing data through Firebase can be pretty simple. Imagine we're creating a game where highscores
// are stored in Firebase for everyone to see. We could create a users bucket in our data that is referenced by each user.
// Setting their highscore would be straightforward.

setupHighscoreListener(userId) {
  firebase.database().ref('users/' + userId).on('value', (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}
// //Now let's say we wanted another client to listen to updates to the high score of a specific user.
// Firebase allows us to set a listener on a specific data reference and get notified each time there is an update to the data.
// In the example below, every time a highscore is updated for the given user, it will print it to console.
