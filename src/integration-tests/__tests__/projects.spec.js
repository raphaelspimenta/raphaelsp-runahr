import nock from 'nock'
import { getCurrentEnvConfig } from '../../core/config'
import { testResource } from '../utils'

const { url } = getCurrentEnvConfig()

describe('Resource tests: projects', () => {

  const loadPayload = [
    {
      id: 1234,
      name: 'Inbox',
      comment_count: 10,
      order: 1,
    },
  ]
  const errorPayload = { message: 'error-message' }

  testResource({
    resourceName: 'projects',
    mocks: {
      load: {
        success: () => nock(url).get('/projects').reply(200, loadPayload),
        error: () => nock(url).get('/projects').reply(500, errorPayload),
      },
    },
    loadPayload,
    errorPayload,
  })
})
