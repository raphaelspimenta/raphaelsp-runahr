import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isCreating, hasCreateError, hasCreateSuccess } from '@zup-next/redux-resource'
import { Box, Button, TextInput, Form, Text } from 'grommet'
import { Checkmark } from 'grommet-icons'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as tasksActions } from 'store/resources/tasks'
import { getNow } from 'core/utils/date'

const AddTask = () => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const tasksResource = useResourceState('tasks')

  const onSubmit = () => {
    dispatch(tasksActions.create({
      content,
      due_string: getNow(),
      due_lang: 'en',
      priority: 1,
    }))
  }

  useEffect(() => {
    if (hasCreateSuccess(tasksResource)) {
      setContent('')
      dispatch(tasksActions.resetCreateStatus())
      dispatch(tasksActions.load())
    }
  }, [tasksResource.create.status])

  if (isCreating(tasksResource)) return <Loader />

  return (
    <Form onSubmit={onSubmit}>
      <Box pad="small" direction="row">
        <Box basis="3/4">
          <TextInput
            placeholder="Add new task"
            value={content}
            onChange={({ target: { value } }) => setContent(value)}
            plain
          />
        </Box>
        {content && <Button type="submit" icon={<Checkmark color="brand" />} />}
      </Box>
      {hasCreateError(tasksResource) && (
        <Box pad="small" animation="fadeIn">
          <Text color="status-error">Ops! An error occurred here..</Text>
        </Box>
      )}
    </Form>
  )
}

export default AddTask
