import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isPristine, isLoading, hasLoadError } from '@zup-next/redux-resource'
import { Box, Heading } from 'grommet'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as tasksActions } from 'store/resources/tasks'
import NoProjectSelected from './components/NoProjectSelected'
import AddTask from './AddTask'
import Task from './Task'

const Tasks = ({ selectedProject }) => {
  const dispatch = useDispatch()
  const tasksResource = useResourceState('tasks')

  const loadTasks = () => dispatch(tasksActions.load())

  useEffect(() => {
    loadTasks()
  }, [selectedProject])

  if (isPristine(tasksResource)) return null
  if (hasLoadError(tasksResource)) return <h1>Erro...</h1>

  const renderTasks = () => (
    <>
      {map(tasksResource.data, (item) => <Task key={item.id} task={item} />)}
      <AddTask selectedProject={selectedProject} />
    </>
  )

  return isEmpty(selectedProject) ? <NoProjectSelected /> : (
    <Box pad="large">
      <Heading color="brand">{selectedProject.name}</Heading>
      {isLoading(tasksResource) ? <Loader /> : renderTasks()}
    </Box>
  )

}

export default Tasks
