import api from '../axios';

export const login = async (email: string, password: string) => {
  return api.post('/users/login', { email, password });
};

export const register = async (username: string, email: string, password: string) => {
  return api.post('/users/register', { username, email, password });
};
