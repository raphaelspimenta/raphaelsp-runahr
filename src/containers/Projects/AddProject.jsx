import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isCreating, hasCreateError, hasCreateSuccess } from '@zup-next/redux-resource'
import { Box, TextInput, Form, Text } from 'grommet'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as projectsActions } from 'store/resources/projects'

const AddProject = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const projectsResource = useResourceState('projects')

  const onSubmit = () => {
    dispatch(projectsActions.create({ name }))
  }

  useEffect(() => {
    if (hasCreateSuccess(projectsResource)) {
      setName('')
      dispatch(projectsActions.load())
      dispatch(projectsActions.resetCreateStatus())
    }
  }, [projectsResource.create.status])

  if (isCreating(projectsResource)) return <Loader />

  return (
    <Form onSubmit={onSubmit}>
      <Box pad="small" direction="row">
        <Box basis="3/4">
          <TextInput
            placeholder="Add new project"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            plain
          />
        </Box>
      </Box>
      {hasCreateError(projectsResource) && (
        <Box pad="small" animation="fadeIn">
          <Text color="status-error">Ops! An error occurred here..</Text>
        </Box>
      )}
    </Form>
  )
}

export default AddProject
