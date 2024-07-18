import Head from "next/head";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";
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
