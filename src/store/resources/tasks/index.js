import { createResource } from '@zup-next/redux-resource'
import { TasksAPI } from 'core/api'

export const NAMESPACE = 'TASKS'

const tasks = createResource(NAMESPACE, {
  load: TasksAPI.get,
  create: TasksAPI.create,
  update: TasksAPI.update,
  remove: TasksAPI.delete,
})

export const { actions } = tasks

export default tasks
