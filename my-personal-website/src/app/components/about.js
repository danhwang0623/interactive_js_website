import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
`;

const About = () => (
  <AboutContainer id="about">
    <h2>About Me</h2>
    <p>
      I'm a passionate software developer with a love for nature. I believe in creating beautiful and functional web applications that are inspired by the natural world.
    </p>
  </AboutContainer>
);

export default About;
