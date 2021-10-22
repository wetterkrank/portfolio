import styled from "styled-components";

export type ProjectCardData = {
  name: string;
  url: string;
  github: string;
  description: string;
  tech: string[];
  image: string;
};

const StyledProjectCard = styled.div`
  border: 0.5px solid black;
  padding: 16px;
`;

export const ProjectCard = ({ data }: { data: ProjectCardData }) => {
  return (
    <StyledProjectCard>
      <h4>{data.name}</h4>
    </StyledProjectCard>
  );
};

const StyledProjectsList = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  gap: 16px;
`;

export const ProjectsList = ({ projects }: { projects: ProjectCardData[] }) => {
  return (
    <StyledProjectsList>
      {projects.map((project) => (
        <ProjectCard data={project} key={project.name} />
      ))}
    </StyledProjectsList>
  );
};
