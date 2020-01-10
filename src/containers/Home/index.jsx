import React, { useState } from 'react'
import { Grid, Box } from 'grommet'
import Projects from 'containers/Projects'
import Tasks from 'containers/Tasks'

const Home = () => {
  const [selectedProject, setSelectedProject] = useState()

  return (
    <Grid
      fill
      rows={['flex']}
      columns={['medium', 'flex']}
      gap="small"
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
    >
      <Box gridArea="nav" background="light-1">
        <Projects onSelectProject={setSelectedProject} />
      </Box>
      <Box gridArea="main" background="light-2">
        <Tasks selectedProject={selectedProject} />
      </Box>
    </Grid>
  )
}

export default Home
