import styled from "styled-components";

const StyledCard = styled.div`
  padding: 16px;
  border: 1px solid #e2e2e2;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Description = styled(Subtitle)`
  margin-bottom: 16px;
`;

const Card = ({ title, subtitle, description, children }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      {children}
    </StyledCard>
  );
};

export default Card;
