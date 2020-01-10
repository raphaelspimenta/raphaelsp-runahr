import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'
import store from 'store'
import Routes from 'routes'

const AppComponent = () => (
  <Grommet theme={hpe} full>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </Grommet>
)

render(<AppComponent />, document.getElementById('root'))
