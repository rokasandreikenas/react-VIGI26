import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NightModeContext } from "../../contexts/NightModeProvider";

const Container = styled.div`
  padding: 20px 80px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #eb5d05;
  font-size: 30px;
  font-weight: 500px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  color: #eb9605;

  &:hover {
    color: #eb5d05;
  }
`;

const RightContainer = styled.div`
  display: flex;
`;

const NavigationBar = () => {
  const { isNightMode, toggleMode } = useContext(NightModeContext);

  return (
    <Container>
      <Logo>vetbee</Logo>
      <RightContainer>
        <nav>
          <StyledLink to="/">Pets</StyledLink>
          <StyledLink to="/medications">Medications</StyledLink>
        </nav>
        <div onClick={toggleMode}>{isNightMode ? "Night" : "Day"}</div>
        <div>LT/EN</div>
      </RightContainer>
    </Container>
  );
};

export default NavigationBar;
