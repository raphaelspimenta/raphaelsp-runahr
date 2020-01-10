let projects = [
  {
    id: 1234,
    name: 'Inbox',
    comment_count: 10,
    order: 1,
  },
]

let tasks = [
  {
    id: 123,
    project_id: 234,
    section_id: 6789,
    content: 'Inbox',
    comment_count: 10,
    order: 1,
    priority: 1,
    url: 'https://todoist.com/showTask?id=123',
  },
]

export const getProjects = () => projects
export const updateProjects = (updated) => projects = [...projects, {
  ...updated, id: Math.floor(Math.random() * 100), comment_count: 0, order: 1,
}]
export const removeProjects = () => projects.pop()

export const getTasks = () => tasks
export const updateTasks = (updated) => tasks = [...tasks, { ...updated }]
