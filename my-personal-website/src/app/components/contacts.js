import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer id = "contact">
    <h2>Contact Me</h2>
    <p>You can reach me via email at <a href="dannielhwang@berkeley.edu">dannielhwang@berkeley.edu</a></p>
  </ContactContainer>
);

export default Contact;
