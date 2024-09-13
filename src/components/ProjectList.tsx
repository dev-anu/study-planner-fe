import React from 'react';
import { Project } from '../types/Project';


interface ProjectListProps {
  projects: Project[];
  onSelect: (projectId: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelect }) => {
  return (
    <div>
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <button onClick={() => onSelect(project._id)}>{project.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
