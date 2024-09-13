import React, { useState, useEffect, Children } from 'react';
import api from '../axios';
import ProjectList from './ProjectList';
import IssueList from './IssueList';
import { useNavigate } from 'react-router-dom';

interface Project {
  _id: string;
  name: string;
}

interface Issue {
  _id: string;
  title: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };
    fetchProjects();
  }, []);

  const fetchIssues = async (projectId: string) => {
    try {
      const response = await api.get(`/issues/${projectId}`);
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues', error);
    }
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    fetchIssues(projectId);
  };


  return (
    <div>
      <div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Dashboard;
