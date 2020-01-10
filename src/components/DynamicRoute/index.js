/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, memo, Suspense } from 'react'
import Loader from 'components/Loader'
import ErrorBoundary from 'components/ErrorBoundary'

const DynamicRoute = (importPath) => {
  const Component = lazy(importPath)

  return memo((props) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  ))
}

export default DynamicRoute
