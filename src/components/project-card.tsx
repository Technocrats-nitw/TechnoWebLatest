import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ProjectCard({projects}:any){
  return(
      <div className="projects">
        {
            projects.map((item:any) => {
            return (

                <ScrollAnimation  animateOnce={true} animateIn="flipInX">
                <div className="project" key={item.id}>
                <div className="body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className="hard-skills">
                  {item.hardSkills.map((item:any) =>{
                      return item;
                  })}
                </div>
                <footer>  
                  <ul className="tech-list">
                      {item.techList.map((item:any) =>{
                        return <li>{item}</li>;
                      })}
                      
                  </ul>
                </footer>
              </div>
            </div>
            </ScrollAnimation>
            
            )
          }
        )
      }
      </div>        
  );
}

export default ProjectCard;