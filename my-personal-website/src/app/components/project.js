import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
`;

const Projects = () => (
  <ProjectsContainer id = "projects">
    <h2>Projects</h2>
    <p>
      Here are some of my projects that showcase my skills in coding and my appreciation for nature.
    </p>
    {/* Add project cards here */}
  </ProjectsContainer>
);

export default Projects;
