import axios from 'axios'
import { getCurrentEnvConfig } from 'core/config'
import ApiError from './error'

const { url, apiKey } = getCurrentEnvConfig()

const api = axios.create({
  baseURL: url,
  headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
})

const onResponseSuccess = (response) => response.data

// eslint-disable-next-line no-console
const onResponseError = (error) => {
  if (error && error.response) throw new ApiError(error.response.status, error.response.data)
  throw new Error(error)
}

api.interceptors.response.use(onResponseSuccess, onResponseError)

export default api
