import styled from "styled-components";
import { cardFloat, cardAppear } from "../styles/animations";

const CardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 380px;
  margin: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(19.8px);
  overflow: hidden;
  animation: ${cardAppear} 0.8s ease-out forwards, ${cardFloat} 6s ease-in-out infinite 0.8s;
  animation-delay: ${props => props.delay || '0s'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const AnimatedCard = ({ imageUrl, delay = "0s", alt = "" }) => {
  return (
    <CardContainer>
      <Card delay={delay}>
        <CardImage src={imageUrl} alt={alt} />
      </Card>
    </CardContainer>
  );
};

export default AnimatedCard;
