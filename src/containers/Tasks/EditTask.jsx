import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hasUpdateSuccess, isUpdating } from '@zup-next/redux-resource'
import { Box, Button, Form, TextInput } from 'grommet'
import { Checkmark, Close } from 'grommet-icons'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as tasksActions } from 'store/resources/tasks'

const EditTask = ({ task, cancel }) => {
  const dispatch = useDispatch()
  const tasksResource = useResourceState('tasks')
  const [content, setContent] = useState(task.content)

  const onEditTask = () => {
    dispatch(tasksActions.update({ id: task.id, content }))
  }

  useEffect(() => {
    if (hasUpdateSuccess(tasksResource)) {
      dispatch(tasksActions.resetUpdateStatus())
      dispatch(tasksActions.load())
    }
  }, [tasksResource.update.status])

  if (isUpdating(tasksResource)) return <Loader />

  return (
    <Form onSubmit={onEditTask}>
      <Box pad="small" direction="row">
        <Box pad="small" basis="3/4">
          <TextInput
            value={content}
            onChange={({ target: { value } }) => setContent(value)}
            plain
          />
        </Box>
        <Button icon={<Close color="neutral-1" />} onClick={cancel} />
        <Button type="submit" icon={<Checkmark color="brand" />} />
      </Box>
    </Form>
  )
}

export default EditTask
