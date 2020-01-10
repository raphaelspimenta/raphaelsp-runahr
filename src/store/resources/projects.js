import { createResource } from '@zup-next/redux-resource'
import { ProjectsAPI } from 'core/api'

const projects = createResource('PROJECTS', {
  load: ProjectsAPI.get,
  create: ProjectsAPI.create,
  update: ProjectsAPI.update,
  remove: ProjectsAPI.delete,
})

export const { actions } = projects

export default projects
