import styled from "styled-components";

const StyledAvatar = styled.div`
  border-radius: 9999px;
  width: 180px;
  height: 180px;
  border-style: solid;
  border-width: 1px;

  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Avatar = ({
  src,
  srcset,
  alt,
}: {
  src: string;
  srcset: string;
  alt: string;
}) => {
  return (
    <StyledAvatar className="avatar">
      {src ? <img src={src} srcSet={srcset} alt={alt} /> : <div></div>}
    </StyledAvatar>
  );
};
