import { useRef } from "react";
import styled from "styled-components";

import { useOnLoadImages } from "../hooks/useOnlLoadImages";

type StyledAvatarProps = {
  loaded: boolean;
};

const StyledAvatar = styled.div<StyledAvatarProps>`
  box-sizing: content-box;
  border-radius: 9999px;
  width: 200px;
  height: 200px;
  overflow: hidden;

  /* border-style: solid; */
  /* border-width: 1px; */
  /* background: ${({ theme }) => theme.colors.placeholder}; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: 1s opacity;
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageLoaded = useOnLoadImages(wrapperRef);

  return (
    <StyledAvatar className="avatar" ref={wrapperRef} loaded={imageLoaded}>
      {src ? (
        <img width="200px" height="200px" src={src} srcSet={srcset} alt={alt} />
      ) : (
        <div></div>
      )}
    </StyledAvatar>
  );
};
