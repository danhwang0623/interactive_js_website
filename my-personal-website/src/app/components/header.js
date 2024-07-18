import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.5);
    color: white;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const NavLink  = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
        text-decoration:underline;
    }
`;

const Header = () => (
    <HeaderContainer>
        <h1>My Personal Website</h1>
        <Nav>
            <NavLink href = "#about">About</NavLink>
            <NavLink href = "#projects">Projects</NavLink>
            <NavLink href = "#contact">Contact</NavLink>
        </Nav>
    </HeaderContainer>
);

export default Header;