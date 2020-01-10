import { useSelector } from 'react-redux'

export function useResourceState(resourceName) {
  return useSelector((state) => state[resourceName])
}
