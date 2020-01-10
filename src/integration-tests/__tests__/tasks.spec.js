import nock from 'nock'
import { getCurrentEnvConfig } from '../../core/config'
import { testResource } from '../utils'

const { url } = getCurrentEnvConfig()

describe('Resource tests: tasks', () => {

  const loadPayload = [
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
  const errorPayload = { message: 'error-message' }

  testResource({
    resourceName: 'tasks',
    mocks: {
      load: {
        success: () => nock(url).get('/tasks').reply(200, loadPayload),
        error: () => nock(url).get('/tasks').reply(500, errorPayload),
      },
    },
    loadPayload,
    errorPayload,
  })
})
