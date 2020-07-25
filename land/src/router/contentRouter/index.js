import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { getUser } from '@/redux/actions'
import { connect } from 'react-redux'
import asyncComponent from '@/utils/asyncComponent'
import home from '@/page/home'
const mapStateToProps = (state) => ({ user: state.user })
@withRouter
@connect(mapStateToProps, { getUser })
class contentRouter extends Component {
  constructor(props) {
    super(props)
    this.state = { menuList: [] }
  }
  componentDidMount() {
    this.init()
  }
  init = async () => {
    if (typeof this.props.user.datas == 'undefined') {
      await this.props.getUser()
    }
    await this.setState({
      menuList: this.props.user.data || []
    })
  }
  reverseDom(data) {
    // let componentStr =
    // let componentItem = require(componentStr)
    var AsyncComponent = asyncComponent(() =>
      import(`@/page/${data.component}/index.js`)
    )
    console.log(`/work${data.url}`)
    if (data.url !== '/') {
      return (
        <Route key={data.id} path={`${data.url}`} component={AsyncComponent}></Route>
      )
    }
  }
  render() {
    return (
      <Switch>
        {this.state.menuList.map((item) => {
          return this.reverseDom(item)
        })}
        <Route exact  path="/" component={home}></Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default contentRouter
