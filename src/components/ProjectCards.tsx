import styled from "styled-components";
import { GitHubIcon, LinkIcon } from "./icons";

export type ProjectCardData = {
  name: string;
  url: string;
  github: string;
  description: string;
  tech: string[];
  image: {
    src: string;
    srcset: string;
  };
};

const StyledProjectCard = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  margin-bottom: 80px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  } // odd cards

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: ${({ theme }) => theme.zIndices.cardTop};
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-title {
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.cardDescription};
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    a {
      text-decoration: dotted underline 1px;
      text-underline-offset: 2px;
    }
    @media (max-width: 768px) {
      margin: 0 0 10px;
      a {
        position: static;
        &:before {
          content: "";
          display: block;
          z-index: ${({ theme }) => theme.zIndices.content};
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.cardDescription};
    padding: 25px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textInverted};
    @media (max-width: 768px) {
      padding: 20px 0;
      color: ${({ theme }) => theme.colors.text};
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.cardDescription};
    margin: 25px 0 10px 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.9em;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        font-size: 0.8em;
        margin: 0 10px 5px 0;
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.cardImage};
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 3px;
      vertical-align: middle;
      transition: ${({ theme }) => theme.transitions.default};
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${({ theme }) => theme.zIndices.cardImageOverlay};
        transition: ${({ theme }) => theme.transitions.default};
        mix-blend-mode: screen;
      }
    }
    .img {
      width: 100%;
      object-fit: cover;
      border-radius: 3px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(40%) opacity(50%);
      }
    }
  } // .project-image
`;

export const ProjectCard = ({ data }: { data: ProjectCardData }) => {
  const { name, url, github, description, tech, image } = data;
  return (
    <StyledProjectCard>
      <div className="project-content">
        <div>
          <h3 className="project-title">
            <a href={url}>{name}</a>
          </h3>

          <div
            className="project-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {tech.length && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}

          <div className="project-links">
            {github && (
              <a href={github} aria-label="GitHub Link">
                <GitHubIcon />
              </a>
            )}
            {url && (
              <a href={url} aria-label="External Link" className="external">
                <LinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-image">
        <a href={url ? url : github ? github : "#"}>
          <img
            width="580px"
            height="350px"
            src={image.src}
            srcSet={image.srcset}
            alt={name}
            className="img"
          />
        </a>
      </div>
    </StyledProjectCard>
  );
};

const StyledProjectList = styled.ul`
  padding: 0;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-auto-flow: row;
  gap: 16px;
`;

export const ProjectList = ({ projects }: { projects: ProjectCardData[] }) => {
  return (
    <StyledProjectList>
      {projects.map((project) => (
        <ProjectCard data={project} key={project.name} />
      ))}
    </StyledProjectList>
  );
};
