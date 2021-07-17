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
    // even there is not document exists, the following line will return the documentReference object
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

/** 
 * @author - Vignesh M
 * @function addCollectionAndDocuments
 * @description the function can be used to add new collection and document to the firestore
 * @param {string} collectionKey - collection in firestore is created based on this string
 * @param {array} objectsToAdd - new document will be created for every element in the array and it will be added to the collection
 * @returns {Promise<void>}
 * @example addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
*/
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    /* 
        1. Create a batch (this will help us execute batch of commands at a time) from firestore
        2. iterate the objectsToAdd array
            1. create a new document (auto-generated id) in the collection 
            2. set the batch
        3. commit the batch it will return a response
    */
    const collectionBatch = firestore.batch();
    objectsToAdd.forEach(object => {
        // passing empty argument will auto-generate the id
        const newDocRef = collectionRef.doc();
        // first argument is the document reference created in the previous step, second is the object to save in the firestore
        collectionBatch.set(newDocRef, object);
    })

   return await collectionBatch.commit()
}

export const convertCollectionsSnapshotIntoCollections = (collectionsSnapshot) => {
    let collections = collectionsSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            title: doc.data().title,
            items: doc.data().items,
            routeName: encodeURI(doc.data().title.toLowerCase())
        }
    });

    return collections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
