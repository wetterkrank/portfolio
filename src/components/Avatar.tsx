import styled from "styled-components";

const StyledAvatar = styled.div`
  border-radius: 9999px;
  width: 144px;
  height: 144px;

  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Avatar = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <StyledAvatar>
      {src ? <img src={src} alt={alt} /> : <div></div>}
    </StyledAvatar>
  );
};
