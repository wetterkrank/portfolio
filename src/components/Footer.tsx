import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: var(--nav-full-height);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px var(--main-padding-x) 16px var(--main-padding-x) 16px;
  background-color: ${({ theme }) => theme.colors.primary};

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    float: left;
    padding: 8px 16px 8px 16px;
  }
`;

type FooterProps = {
  links: {
    name: string;
    url: string;
  }[];
};

export const Footer = ({ links }: FooterProps) => {
  return (
    <StyledFooter>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};
