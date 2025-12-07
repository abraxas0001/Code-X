import axios from 'axios';
import type { Topic, User, CompilationResult } from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Topics
export const fetchTopics = async (): Promise<Topic[]> => {
  const { data } = await api.get('/topics');
  return data;
};

export const fetchTopicBySlug = async (slug: string): Promise<Topic> => {
  const { data } = await api.get(`/topics/${slug}`);
  return data;
};

// User
export const fetchUser = async (userId: string): Promise<User> => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};

export const updateUserProgress = async (
  userId: string,
  progressData: any
): Promise<User> => {
  const { data } = await api.patch(`/users/${userId}/progress`, progressData);
  return data;
};

// Code Execution (using Judge0 or Piston API)
export const executeCode = async (
  code: string,
  language: string
): Promise<CompilationResult> => {
  try {
    const { data } = await api.post('/execute', { code, language });
    return data;
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.error || 'Compilation failed',
    };
  }
};

export default api;
