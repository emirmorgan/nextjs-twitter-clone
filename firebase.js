import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { setTheUser } from "./utils/setUser";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const getUser = await getDoc(doc(db, "users", user.uid));

    let data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      ...getUser.data(),
    };

    setTheUser(data);
  } else {
    setTheUser(false);
  }
});

export const userRegistration = async (email, username, password) => {
  const res = await getDocs(
    query(collection(db, "users"), where("username", "==", username))
  );

  if (res.size === 0) {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const uid = res.user.uid;

    try {
      await setDoc(doc(db, "users", uid), {
        uid: uid,
        displayName: username,
        username: username,
        photoSrc: "https://source.unsplash.com/collection/928423/480x480",
        followers: [],
        following: [],
        notifications: [],
        bio: "This is my bio!",
        tweets: [
          {
            tweet: "Hey everyone!",
            likes: 111,
            retweets: 55,
            comments: 33,
          },
          {
            tweet: "gm",
            likes: 222,
            retweets: 111,
            comments: 555,
          },
          {
            tweet: "this clone website coded by @emirmorgan :O",
            likes: 333,
            retweets: 222,
            comments: 111,
          },
        ],
      });

      return res.user;
    } catch (err) {
      alert("Error: " + err);
    }
  } else {
    alert("This username already on use.");
  }
};

export const userLogin = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Error: " + error);
  }
};

export const userLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert("Error: " + error);
  }
};

export const sendTweet = async (user, tweet, comments, retweets, likes) => {
  const userDocRef = doc(db, "users", user.uid);

  await updateDoc(userDocRef, {
    tweets: arrayUnion({
      tweet: tweet,
      comments: comments,
      retweets: retweets,
      likes: likes,
    }),
  });
};

export const editProfile = async (user, source, name, bio) => {
  const userDocRef = doc(db, "users", user.uid);

  await updateDoc(userDocRef, {
    photoSrc: source,
    displayName: name,
    bio: bio,
  });
};
