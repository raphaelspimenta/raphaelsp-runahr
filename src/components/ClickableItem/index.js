import React from 'react'
import { Box, Text } from 'grommet'
import { BarChart } from 'grommet-icons'

const ClickableItem = ({ onClick, text }) => (
  <Box
    direction="row-responsive"
    justify="center"
    align="center"
    pad="xlarge"
    gap="medium"
  >
    <Box
      pad="large"
      align="center"
      background={{ color: 'brand', opacity: 'strong' }}
      round
      gap="small"
      onClick={onClick}
    >
      <BarChart size="large" />
      <Text color="light-2">{text}</Text>
    </Box>
  </Box>
)

export default ClickableItem
