import styled from "styled-components";

const ContainedButton = styled.button`
  background-color: #eb5d05;
  border: 1px solid #eb5d05;
  padding: 10px 24px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
`;

const Outlined = styled(ContainedButton)``;

const Button = ({ children, type }) => {
  // type === "???" ? button ryzas : button baltas
  if (type === "???") {
    return; // baltas
  } else {
    return <ContainedButton>{children}</ContainedButton>;
  }
};

export default Button;
