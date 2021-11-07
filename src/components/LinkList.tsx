import { ILink } from "../types/shared";

export const LinkList = ({ links }: { links: ILink[] }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};
