import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/GlobalStyle";

const Home = () => (
  <div>
    <Head>
      <title>My Personal Website</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Header />
    <Hero />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
