import api from '../axios';

export const getIssuesByProject = async (projectId: string) => {
  return api.get(`/issues/${projectId}`);
};

export const createIssue = async (issueData: any) => {
  return api.post('/issues', issueData);
};
