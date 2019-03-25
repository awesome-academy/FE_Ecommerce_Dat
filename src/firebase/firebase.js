import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBBPcJGmtYNFhuU262Yjed__gUJu66DGBA",
    authDomain: "fe-madala-ecommerce.firebaseapp.com",
    databaseURL: "https://fe-madala-ecommerce.firebaseio.com",
    projectId: "fe-madala-ecommerce",
    storageBucket: "fe-madala-ecommerce.appspot.com",
    messagingSenderId: "232997170414"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};
