import styled from "styled-components";
import { Avatar } from "./Avatar";

type HeroProps = {
  image: {
    src: string;
    alt: string;
  };
};

const StyledHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  div h2 {
    margin-bottom: 8px;
  }
  div p {
    margin-top: 0;
  }
`;

export const Hero = ({ image }: HeroProps) => {
  return (
    <StyledHero>
      <div>
        <h2>Hi, I'm Alex,</h2>
        <p>a full stack web developer from Berlin</p>
      </div>
      <Avatar {...image} />
    </StyledHero>
  );
};
