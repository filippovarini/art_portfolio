import React, { Component } from 'react'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

export class App extends Component {
  getComponent() {
    const path = window.location.pathname
    const params = path.split('/').filter(param => param != '')
    
    let component = <NotFound />
    
    if (params.length == 0) {
      component = <Home />
    }

    return component
  }

  render() {
    const component = this.getComponent()

    return (
      <div>
        {component}
      </div>
    )
  }
}

export default App

