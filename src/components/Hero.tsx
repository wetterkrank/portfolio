import styled from "styled-components";
import { Avatar } from "./Avatar";

type HeroProps = {
  image: {
    src: string;
    srcset: string;
    alt: string;
  };
};

const StyledHero = styled.div`
  min-height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  .intro,
  .avatar {
    margin-right: 16px;
  }
  .intro h2 {
    margin-bottom: 8px;
  }
  .intro p {
    margin-top: 0;
  }
`;

export const Hero = ({ image }: HeroProps) => {
  return (
    <StyledHero>
      <div className="intro">
        <h2>Hi, I'm Alex,</h2>
        <p>a full stack web developer from Berlin</p>
      </div>
      <Avatar {...image} />
    </StyledHero>
  );
};
