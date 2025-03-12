import styled from "styled-components";
import { cardFloat, cardAppear } from "../styles/animations";

const CardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 380px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 280px;
    margin: 5px;
  }
  
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
  height: 70%;
  object-fit: cover;
  border-radius: 24px 24px 0 0;
`;

const CardContent = styled.div`
  padding: 15px;
  color: white;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const AnimatedCard = ({ imageUrl, title, description, delay = "0s", alt = "" }) => {
  return (
    <CardContainer>
      <Card delay={delay}>
        <CardImage src={imageUrl} alt={alt} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default AnimatedCard;
