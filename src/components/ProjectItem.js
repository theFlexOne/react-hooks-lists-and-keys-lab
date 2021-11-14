import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  return (
    <div className="project-item" id={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, i) => {
          return <span key={i}>{tech}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
