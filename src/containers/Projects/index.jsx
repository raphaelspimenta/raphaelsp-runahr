import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import map from 'lodash/map'
import { Accordion, AccordionPanel, Text, Box, Heading } from 'grommet'
import { AddCircle, Configure } from 'grommet-icons'
import { isPristine, isLoading, hasLoadError, hasRemoveSuccess } from '@zup-next/redux-resource'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as projectsActions } from 'store/resources/projects'
import AddProject from './AddProject'
import { StyledBox, StyledMenu } from './styled'

const Projects = ({ onSelectProject }) => {
  const dispatch = useDispatch()
  const projectsResource = useResourceState('projects')

  useEffect(() => {
    dispatch(projectsActions.load())
  }, [])

  useEffect(() => {
    if (hasRemoveSuccess(projectsResource)) {
      dispatch(projectsActions.load())
      dispatch(projectsActions.resetRemoveStatus())
    }
  }, [projectsResource.remove.status])

  const onDeleteProject = (id) => {
    dispatch(projectsActions.remove(id))
  }

  const renderPanelTitle = () => (
    <Box
      direction="row"
      align="center"
      gap="small"
      pad={{ horizontal: 'small' }}
    >
      <AddCircle color="brand" />
      <Heading level={4} color="dark-1">
        Projects
      </Heading>
    </Box>
  )

  if (isPristine(projectsResource)) return null
  if (isLoading(projectsResource)) return <Loader />
  if (hasLoadError(projectsResource)) return <h1>Erro...</h1>

  return (
    <Accordion>
      <AccordionPanel label={renderPanelTitle()}>
        {map(projectsResource.data, (data) => (
          <Box direction="row" key={data.id} pad="medium" background="light-2" onClick={() => onSelectProject(data)}>
            <StyledBox basis="3/4">
              <Text>{data.name}</Text>
            </StyledBox>
            {data.name !== 'Inbox' && (
              <StyledMenu
                size="small"
                icon={<Configure />}
                items={[{ label: 'Delete', onClick: () => onDeleteProject(data.id) }]}
              />
            )}
          </Box>
        ))}
        <AddProject />
      </AccordionPanel>
    </Accordion>
  )

}

export default Projects
