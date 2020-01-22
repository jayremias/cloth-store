import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjGeJk6h0GZi_S5cW8zjFvGqML55l6qjo",
    authDomain: "clothstore-db.firebaseapp.com",
    databaseURL: "https://clothstore-db.firebaseio.com",
    projectId: "clothstore-db",
    storageBucket: "clothstore-db.appspot.com",
    messagingSenderId: "823295126426",
    appId: "1:823295126426:web:97f833eae82e1573b0e823",
    measurementId: "G-SD4NT8BGB6"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShop = await userRef.get();
    if(!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 