import Display from "@/components/Display";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ThemeAtom from "@/utils/ThemeAtom";
import { useLayoutEffect } from "react";
import { useAtom } from "jotai";

const index = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  useLayoutEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Nav />

      <Display />

      <Footer />
    </>
  );
};

export default index;
