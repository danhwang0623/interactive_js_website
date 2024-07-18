import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/images/bridge_nature.jpeg") no-repeat center center/cover;
  color: white;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSubText = styled.p`
  font-size: 1.5rem;
`;

const Hero = () => (
  <HeroContainer>
    <HeroText>Welcome to My Personal Website</HeroText>
    <HeroSubText>Combining the beauty of nature with the art of coding</HeroSubText>
  </HeroContainer>
);

export default Hero;
