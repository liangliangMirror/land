import React from 'react'
import './App.css'
import { Switch, withRouter } from 'react-router-dom'
// import PrivateRoute from '@/components/PrivateRoute'
import LoadableComponent from '@/utils/loadableComponent'
const Index = LoadableComponent(import('@/page/index'))
// @withRouter
const effect = function rea(fn:()=>{},args) {
  return run(effect, args)
}
effect.deps = ['123']
effect.active = true
function run(effect, args) {
  const { deps } = effect
  console.log(effect.active)
  console.log(deps, 1111111)
}
new effect()
class App extends React.Component {
  render(h) {
    return (
      // <Switch>
      //   {/* <Route path="/login" component={}></Route> */}
      //   <PrivateRoute path='/' component={Index} />
      // </Switch>
      <Index />
    )
  }
}

export default App
