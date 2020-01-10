import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isRemoving, hasRemoveSuccess } from '@zup-next/redux-resource'
import { Box, CheckBox, Button } from 'grommet'
import { Trash, Edit } from 'grommet-icons'
import { useResourceState } from 'hooks/redux'
import Loader from 'components/Loader'
import { actions as tasksActions } from 'store/resources/tasks'
import EditTask from './EditTask'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  const tasksResource = useResourceState('tasks')
  const [checked, setChecked] = useState(false)
  const [isUpdatingTask, setIsUpdatingTask] = useState(false)

  const onChange = () => {
    setChecked(!checked)
  }

  const onDeleteTask = () => {
    dispatch(tasksActions.remove(task.id))
  }

  const toggleUpdatingTask = () => setIsUpdatingTask(!isUpdatingTask)

  useEffect(() => {
    if (hasRemoveSuccess(tasksResource)) {
      dispatch(tasksActions.resetRemoveStatus())
      dispatch(tasksActions.load())
    }
  }, [tasksResource.remove.status])

  if (isRemoving(tasksResource)) return <Loader />

  return (
    <>
      {isUpdatingTask ? (
        <EditTask task={task} cancel={toggleUpdatingTask} />
      ) : (
        <Box pad="small" direction="row">
          <Box pad="small" basis="3/4">
            <CheckBox label={task.content} checked={checked} onChange={onChange} />
          </Box>
          <Button icon={<Edit color="brand" />} onClick={toggleUpdatingTask} />
          <Button icon={<Trash color="status-error" />} onClick={onDeleteTask} />
        </Box>
      )}
    </>
  )
}

export default Task
