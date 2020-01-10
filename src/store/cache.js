import { createCacheManager } from '@zup-next/redux-action-cache'
import resources from './resources'

const { projects } = resources

const cacheManager = createCacheManager({
  include: [projects.types.LOAD],
  invalidations: [
    { type: 'pattern', invalidatedBy: /(.+)\/LOAD_ERROR$/, invalidated: '$1/LOAD' },
    { type: 'pattern', invalidatedBy: /(.+)\/LOAD_SUCCESS$/, invalidated: '$1/LOAD' },
  ],
})

export default cacheManager
