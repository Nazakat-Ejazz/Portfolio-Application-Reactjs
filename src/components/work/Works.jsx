import React, { useState, useEffect } from "react";
import { projectData, projectsNav } from "./Data";
import WorkItem from "./WorkItem.jsx";

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, ind) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, ind);
              }}
              className={`${active === ind ? "active-work" : ""} work__item `}
              key={ind}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item, ind) => {
          return <WorkItem item={item} key={ind} />;
        })}
      </div>
    </>
  );
};

export default Works;
