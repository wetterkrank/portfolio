import { Link } from "../types/shared";

export const LinkList = ({ links }: { links: Link[] }) => {
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
