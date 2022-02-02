import React from "react";
import { Container } from "../assets/styles/projects";
import { projects } from "../constants/projects";
import { ProjectCard } from "../components/project-card";
import { Achievements } from "../components/Achievements"

function Projects(){
  return(
    <>
    <Container id="projects">
    <Achievements></Achievements>
    <h2 className="headings">Projects</h2>
    <div className="projects">
      {projects.map((project) =>{
        return <ProjectCard project={project} />
      })}
    </div>
  </Container>
    </>
  );
}

export default Projects;