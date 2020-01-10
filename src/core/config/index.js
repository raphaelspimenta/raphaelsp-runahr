export const env = process.env.APP_ENV

export const environments = {
  mock: {
    url: 'http://localhost:3000',
    apiKey: '1f0aed396215936d628d727a67c4931729e2534f',
  },
  production: {
    url: 'https://api.todoist.com/rest/v1',
    apiKey: '1f0aed396215936d628d727a67c4931729e2534f',
  },
}

export const getCurrentEnvConfig = () => environments[env] || environments.production
