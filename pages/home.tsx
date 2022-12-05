import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { userLogout } from "../firebase";

const Home = () => {
  const auth = getAuth();
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading screen</div>;
  }

  if (!user) {
    router.push("/");
    return <div>Loading screen</div>;
  }

  return (
    <div>
      Homepage <button onClick={() => userLogout()}>Log out</button>
    </div>
  );
};

export default Home;
