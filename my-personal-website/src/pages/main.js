import Head from 'next/head';
import CampingScene from '../app/components/CampingScene';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Main = () => (
  <MainContainer>
    <Head>
      <title>My Personal Website</title>
    </Head>
    <CampingScene />
  </MainContainer>
);

export default Main;
