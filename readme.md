# Todo List for Runahr

## About the project
This project is an application to control tasks. You'll be able to create, update and delete them.

## Getting Started

```sh
yarn
```

### Environments
We have 2 environments to run:
* `production` access the real API
* `mock` servers a mock data to test the flow and develop faster

To start the project you can use one of the commands above

```sh
yarn start
yarn start:mock
```

### Folder structure
* `public` (is a folder to public files)
* `src` (is the source path of the application)
  * `containers` components that hold some logic and state control
  * `components` (dumb components to visual concepts)
  * `core` (here we have api definition, utils and general configuration)
  * `hooks` (custom hooks)
  * `integration-tests` (tests for async flow)
  * `routes` (application routes)
  * `store` (store configuration)
* `stub` (mock server configuration)
* `unit-test` (tests config using jest and enzyme)

## Important dependencies

* [Baldr](https://github.com/zup-next/redux-resource) 
* [Redux Action Cache](https://github.com/zup-next/redux-action-cache) 
* [Jest](https://jestjs.io/) e [Enzyme](https://airbnb.io/enzyme/) to unit tests
* [Lodash](https://lodash.com/) a great lib for common javascript functions
* [react-router-dom](https://reactnavigation.org/) to application routes
* [Redux](https://redux.js.org/) e [Redux Saga](https://redux-saga.js.org/) state control
* [Styled Components](https://www.styled-components.com/) a great lib to style the application
* [Grommet](https://v2.grommet.io/) a great lib for theming react components wich uses Styled Components

## About `Tests`
There are two types of tests:

* `unit-tests` for unit tests. Its configuration file is locate at `src/core/unit-test`.
* `integration-tests` it is our integration tests that are responsible for ensuring our state control flows and requests. Its definition is in `integration-tests`

## Future Plans
