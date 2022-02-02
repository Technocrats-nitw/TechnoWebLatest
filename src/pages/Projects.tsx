import React from "react";
import { useState } from "react";
import { Container } from "../assets/styles/projects";
import { projects } from "../constants/projects";
import { ProjectCard } from "../components/project-card";
import { Achievements } from "../components/Achievements"
import { Button } from "../components/Button"

const allCategories = ['All', ...new Set(projects.map(item => item.skill))];

console.log(allCategories)


function Projects(){

  const [projectCard, setProjectCard] = useState(projects)
  const [buttons, setButtons] = useState(allCategories)

  const filter = (button:any) =>  {
      if(button === 'All'){
        setProjectCard(projects);
        return;
      }
  
      const filteredData = projects.filter(item => item.skill ===  button);
      setProjectCard(filteredData)
  }


  return(
    <>
    <Container id="projects">
    <Achievements></Achievements>
    <h2 className="headings">Projects</h2>
      <Button button={buttons} filter={filter}/>
      <ProjectCard projects={projectCard} />
    </Container>
    </>
  );


}

export default Projects;