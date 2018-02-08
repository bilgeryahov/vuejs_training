import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCBa7oh-4nSRMrUqCQwf6V_3fPh7Ou0dLk",
	authDomain: "turnout-course-app.firebaseapp.com",
	databaseURL: "https://turnout-course-app.firebaseio.com",
	projectId: "turnout-course-app",
	storageBucket: "",
	messagingSenderId: "809446408010"
};

export const firebaseApp = firebase.initializeApp(config);