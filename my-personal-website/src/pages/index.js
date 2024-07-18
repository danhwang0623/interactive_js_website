import Head from 'next/head';
import { useRouter } from 'next/router';
import ThreeScene from '../app/components/ThreeScene';
import styled from 'styled-components';

const IntroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Button = styled.button`
  position: fixed; /* Change to fixed positioning */
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the button is on top of other elements */

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Intro = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/main');
  };

  return (
    <IntroContainer>
      <Head>
        <title>Introduction</title>
      </Head>
      <ThreeScene />
      <Button onClick={handleContinue}>Continue to My Site</Button>
    </IntroContainer>
  );
};

export default Intro;
