import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

// Mount function to start up the app
const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  // defaultHistory will only be provided when using this mfe in isolation or development
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })

  if (onNavigate) history.listen(onNavigate)

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el)

  return {
    onParentNavigate(location) {
      // console.log('Container just navigated')
      // console.log(location)
      const { pathname: currentPathname } = history.location
      const { pathname: nextPathname } = location

      console.log({currentPathname, nextPathname})

      if (currentPathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// If we're in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We're running through container
// and we should export the mount function
export { mount }
