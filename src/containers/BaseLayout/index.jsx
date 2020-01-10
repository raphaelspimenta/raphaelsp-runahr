import React from 'react'
import { Main } from 'grommet'
import TopMenu from './Menu'

const BaseView = ({ children }) => (
  <>
    <Main pad="small" fill>
      <TopMenu />
      {children}
    </Main>
  </>
)

export default BaseView
