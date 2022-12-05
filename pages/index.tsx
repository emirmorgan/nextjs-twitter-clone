import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Head from "next/head";
import Login from "../components/Login/Index";
import { useRouter } from "next/router";

interface SeoType {
  title: string;
  desc: string;
}

const SeoProps: SeoType = {
  title: "Twitter - It's what's happening",
  desc: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};

export default function Home() {
  const auth = getAuth();
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading screen</div>;
  }

  if (user) {
    router.push("/home");
  }

  return (
    <>
      <Head>
        <title>{SeoProps.title}</title>
        <meta name="og:title" content={SeoProps.title}></meta>
        <meta name="description" content={SeoProps.desc}></meta>
        <meta name="og:description" content={SeoProps.desc}></meta>
      </Head>
      <Login />
    </>
  );
}
