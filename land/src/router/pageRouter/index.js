import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import WorkPlatformIndex from '@/page/workPlatform/index.js'
import OtherWindowIndex from '@/page/otherWindow/index.js'
@withRouter
class pageRputer extends Component {
    render() {
        return (
          <Switch>
            <Route path="/work" component={WorkPlatformIndex}></Route>
            <Route path="/new" component={OtherWindowIndex}></Route>
            <Redirect to="/work" />
          </Switch>
        )
      }
}
export default pageRputer