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
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  .intro,
  .avatar {
    margin-right: 24px;
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
        <h2>Hi! I'm Alex Antsiferov,</h2>
        <p>a full stack web developer</p>
      </div>
      <Avatar {...image} />
    </StyledHero>
  );
};
