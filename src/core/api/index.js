import api from './base'

export const ProjectsAPI = {
  get: () => api.get('/projects'),
  create: ({ name }) => api.post('/projects', { name }),
  update: ({ id, name }) => api.put(`/projects/${id}`, { name }),
  delete: (id) => api.delete(`/projects/${id}`),
}

export const SectionsAPI = {
  get: () => api.get('/sections'),
  create: ({ projectId, name }) => api.post('/sections', { projectId, name }),
  update: ({ id, name }) => api.put(`/sections/${id}`, { name }),
  delete: (id) => api.delete(`/sections/${id}`),
}

export const TasksAPI = {
  get: () => api.get('/tasks'),
  create: ({ content, due_string, due_lang, priority }) => api.post('/tasks', { content, due_string, due_lang, priority }),
  update: ({ id, content }) => api.post(`/tasks/${id}`, { content }),
  delete: (id) => api.delete(`/tasks/${id}`),
}
