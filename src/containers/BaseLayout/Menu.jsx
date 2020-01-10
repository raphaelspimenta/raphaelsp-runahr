import React from 'react'
import { Header, Button } from 'grommet'
import { Home } from 'grommet-icons'

const TopMenu = () => (
  <Header gap="large">
    <Button icon={<Home />} hoverIndicator />
  </Header>
)

export default TopMenu
