import OffCanvas from "react-aria-offcanvas";
import styled from "styled-components";
import { BurgerIcon, CloseIcon } from "./BurgerMenu.icons";

const StyledBurgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  background: none;
  border: none;
  cursor: pointer;
`;

export const BurgerButton = ({ onClick }: { onClick: () => void }) => (
  <StyledBurgerButton onClick={onClick}>
    <BurgerIcon />
  </StyledBurgerButton>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <StyledBurgerButton onClick={onClick}>
    <CloseIcon />
  </StyledBurgerButton>
);

type SideMenuProps = {
  open: boolean;
  closeFn: () => void;
  navLinks: {
    name: string;
    url: string;
  }[];
};

const offCanvasStyle = {
  content: {
    height: "100vh",
  },
  overlay: {},
};

export const SideMenu = ({ open, closeFn, navLinks }: SideMenuProps) => {
  return (
    <nav>
      <OffCanvas
        isOpen={open}
        onClose={closeFn}
        mainContainerSelector="#root"
        style={offCanvasStyle}
        labelledby="menu-button"
      >
        <CloseButton onClick={closeFn} />
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </OffCanvas>
    </nav>
  );
};
