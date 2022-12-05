import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { userLogout } from "../firebase";

import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const auth = getAuth();
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    router.push("/");
    return <LoadingScreen />;
  }

  return (
    <div>
      Homepage <button onClick={() => userLogout()}>Log out</button>
    </div>
  );
};

export default Home;
