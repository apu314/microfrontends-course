import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        // console.log('The container app noticed navigation in Marketing')
        const { pathname: currentPathname } = history.location // currentPathname
        const { pathname: nextPathname } = location // nextPathname
        if (currentPathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])
  
  return <div ref={ref} />
}
