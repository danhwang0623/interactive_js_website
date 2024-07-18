import Head from "next/head";
import Header from "../app/components/header";
import Hero from "../app/components/hero";
import About from "../app/components/about";
import Projects from "../app/components/projects";
import Contact from "../app/components/contact";
import Footer from "../app/components/footer";
import GlobalStyle from "../styles/globalstyle";

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
