import React from 'react'
import { Box, Heading } from 'grommet'
import { Launch } from 'grommet-icons'

const NoProjectSelected = () => (
  <Box pad="large" align="center">
    <Heading color="brand" textAlign="center">
      Hey!
    </Heading>
    <Launch size="xlarge" pad="medium" />
    <Heading color="brand" textAlign="center">
      Please, select a project and see how fun is to control your tasks here :)
    </Heading>
  </Box>
)

export default NoProjectSelected
