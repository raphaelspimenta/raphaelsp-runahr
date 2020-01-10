import { getProjects, updateProjects, removeProjects, getTasks, updateTasks } from './model'
import Joi from '@hapi/joi'

const loadProjects = {
  method: 'GET',
  path: '/projects',
  handler: getProjects,
}

const createProject = {
  method: 'POST',
  path: '/projects',
  handler: (request, h) => {
    updateProjects(request.payload)

    return h.response(getProjects())
  },
  options: {
    validate: {
      payload: {
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
      },
    },
  },
}

const deleteProject = {
  method: 'DELETE',
  path: '/projects/:id',
  handler: (request, h) => {
    removeProjects()

    return h.response(getProjects())
  },
  options: {
    validate: {
      payload: {
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
      },
    },
  },
}

const loadTasks = {
  method: 'GET',
  path: '/tasks',
  handler: getTasks,
}

const createTask = {
  method: 'POST',
  path: '/tasks',
  handler: (request, h) => {
    updateTasks(request.payload)

    return h.response(getTasks())
  },
  options: {
    validate: {
      payload: {
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
      },
    },
  },
}

const editTask = {
  method: 'POST',
  path: '/tasks/:id',
  handler: (request, h) => {
    updateTasks(request.payload)

    return h.response(getTasks())
  },
  options: {
    validate: {
      payload: {
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
      },
    },
  },
}

const deleteTask = {
  method: 'DELETE',
  path: '/tasks/:id',
  handler: (request, h) => {
    updateTasks(request.payload)

    return h.response(getTasks())
  },
  options: {
    validate: {
      payload: {
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
      },
    },
  },
}

export default [
  loadProjects,
  createProject,
  deleteProject,
  loadTasks,
  createTask,
  editTask,
  deleteTask,
]
