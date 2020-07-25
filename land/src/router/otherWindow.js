import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import WorkPlatformIndex from '@/page/otherWindow/home.js'
@withRouter
class pageRputer extends Component {
    render() {
        return (
          <Switch>
            <Route path="/one" component={WorkPlatformIndex}></Route>
            <Route path="/" component={WorkPlatformIndex}></Route>
            <Redirect to="/" />
          </Switch>
        )
      }
}
export default pageRputer