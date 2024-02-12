import Head from "next/head";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Projects } from "../components/Projects";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Phillipi Alves | Senior UX Designer</title>
      </Head>

      <Header />
      <Hero />
      <AboutUs />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
