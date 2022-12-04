import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { setTheUser } from "./utils/setUser";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
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
        photoSrc:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
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
