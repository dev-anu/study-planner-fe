import api from '../axios';

export const getProjects = async () => {
  return api.get('/projects');
};

export const createProject = async (projectData: any) => {
  return api.post('/projects', projectData);
};
