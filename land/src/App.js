import React from 'react';
import './App.css';
import { Switch,withRouter } from 'react-router-dom'
// import PrivateRoute from '@/components/PrivateRoute'
import LoadableComponent from '@/utils/loadableComponent'
const Index = LoadableComponent(import('@/page/index'))
// @withRouter
class App extends React.Component {
  render(h) {
    return (
      // <Switch>
      //   {/* <Route path="/login" component={}></Route> */}
      //   <PrivateRoute path='/' component={Index} />
      // </Switch>
      <Index />
    );
  }
}

export default App;
