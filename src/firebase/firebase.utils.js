import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCkO2su3G9PMhlOlb7m8IGMP8UvnV6MDbQ",
    authDomain: "crwn-clothing-db-89054.firebaseapp.com",
    projectId: "crwn-clothing-db-89054",
    storageBucket: "crwn-clothing-db-89054.appspot.com",
    messagingSenderId: "708334711960",
    appId: "1:708334711960:web:632139ac963510f7df4ced",
    measurementId: "G-W7X1YZ3DX1"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;

    // get the document reference
    // using document reference object only we can perform CRUD operations
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get the snapshot of the document reference using get method
    // snapshot contains whether the data exists in the firebase and other
    // meta data information
    // since it is returning the object from the backend, use await
    const userSnapshot = await userRef.get();

    // if the user not exists in the firebase, create one using set method
    if(!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            });
        } catch(error) {
            console.log('User cannot be created ', error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
