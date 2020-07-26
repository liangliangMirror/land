import React, { Component, useState, useEffect } from 'react'
import { Menu } from 'antd'
import { withRouter, Link, BrowserRouter } from 'react-router-dom'
import { getUser } from '@/redux/actions'
import { connect, useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
// const logoImg = import()
const { SubMenu } = Menu

// const store = connect(
//   (state) => ({user:state.use}),
//   (dispatch) => bindActionCreators({getUser},dispatch)
// )
// const mapStateToProps = (state) => ({ user: state.user })
// @withRouter
class mySidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { menuList: [] }
  }
  componentDidMount() {
    this.getUserTNMenu()
  }
  getUserTNMenu = async () => {
    if (typeof this.props.user.datas == 'undefined') {
      await this.props.getUser()
    }
    await this.setState({
      menuList: this.props.user.datas || []
    })
  }
  reverseDom(data) {
    if (data.childs.length > 0) {
      return (
        <SubMenu key={data.id} title={data.name}>
          {data.childs.map((it) => {
            return this.reverseDom(it)
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={data.id}>
          <Link to={data.url}> {data.name}</Link>
        </Menu.Item>
      )
    }
  }
  render() {
    const { menuList } = this.state
    return (
      <div className="sidebar">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {menuList.map((item, idx) => {
            return this.reverseDom(item)

            // console.log(item)
            // if (item.childs.length > 0) {
            //   return (
            //     <SubMenu key={item.id} title={item.name}>
            //       {item.childs.map((it) => {})}
            //     </SubMenu>
            //   )
            // } else {
            //   return <Menu.Item key={item.id}>{item.name}</Menu.Item>
            // }
          })}
        </Menu>
      </div>
    )
  }
}
// @withRouter
function MySidebar2() {
  const [menuList, setMenuList] = useState([])
  let user = useSelector((state) => ({ user: state.user }))
  const lock = true
  const dispatch = useDispatch()
  const reverseDom = (data) => {
    console.log(data)
    if (data.childs.length > 0) {
      return (
        <SubMenu key={data.id} title={data.name}>
          {data.childs.map((it) => {
            return reverseDom(it)
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={data.id}>
          <Link to={data.url}> {data.name}</Link>
        </Menu.Item>
      )
    }
  }
  const getUserTNMenu = async () => {
    if (typeof user.datas == 'undefined') {
      await dispatch(getUser())
      console.log(dispatch)
    }
    await setMenuList(user.datas || [])
    
  }
  useEffect(() => {
    getUserTNMenu()
  }, [lock])
  return (
    <div className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menuList.map((item, idx) => {
          return reverseDom(item)

          // console.log(item)
          // if (item.childs.length > 0) {
          //   return (
          //     <SubMenu key={item.id} title={item.name}>
          //       {item.childs.map((it) => {})}
          //     </SubMenu>
          //   )
          // } else {
          //   return <Menu.Item key={item.id}>{item.name}</Menu.Item>
          // }
        })}
      </Menu>
    </div>
  )
}
export default withRouter(MySidebar2)
// export default connect(mapStateToProps, { getUser })(mySidebar)
