import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Daniel Hwang. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;


