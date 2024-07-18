import Head from 'next/head';
import Header from '../app/components/header';
import Hero from '../app/components/hero';
import About from '../app/components/about';
import Projects from '../app/components/project';
import Contact from '../app/components/contacts';
import Footer from '../app/components/footer';
import GlobalStyle from '../styles/globalstyle';
import Link from 'next/link';
import styled from 'styled-components';

const IntroLink = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

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
    <IntroLink>
      <Link href="/intro">Introduction</Link>
    </IntroLink>
  </div>
);

export default Home;

