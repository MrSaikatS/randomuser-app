import Display from "@/components/Display";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ThemeAtom from "@/utils/ThemeAtom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import Head from "next/head";

const index = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Head>
        <title>RandomUser | CIT</title>
      </Head>

      <Nav />

      <Display />

      <Footer />
    </>
  );
};

export default index;
