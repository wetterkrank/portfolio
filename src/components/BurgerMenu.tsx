import OffCanvas from "react-aria-offcanvas";
import styled from "styled-components";

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
  <StyledBurgerButton>
    <svg
      width="40px"
      height="40px"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </StyledBurgerButton>
);

const CloseButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

type SideMenuProps = {
  open: boolean;
  closeFn: () => void;
};

export const SideMenu = ({ open, closeFn }: SideMenuProps) => {
  return (
    <nav>
      <OffCanvas isOpen={open} onClose={closeFn} labelledby="menu-button">
        {CloseButton}
      </OffCanvas>
    </nav>
  );
};
