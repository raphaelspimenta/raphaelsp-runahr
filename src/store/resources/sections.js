import { createResource } from '@zup-next/redux-resource'
import { SectionsAPI } from 'core/api'

const sections = createResource('SECTIONS', {
  load: SectionsAPI.get,
  create: SectionsAPI.create,
  update: SectionsAPI.update,
  remove: SectionsAPI.delete,
})

export const { actions } = sections

export default sections
