import styled from "styled-components";
import { ProjectCardData, ProjectsList } from "./ProjectCards";

export type JobData = {
  name: string;
  dates: string;
  projects: ProjectCardData[];
};

const StyledJobsList = styled.div``;

export const JobsList = ({ jobs }: { jobs: JobData[] }) => {
  return (
    <StyledJobsList>
      {jobs.map((job) => (
        <div key={job.name}>
          <h3>{job.name}</h3>
          <div>{job.dates}</div>
          <ProjectsList projects={job.projects} />
        </div>
      ))}
    </StyledJobsList>
  );
};
