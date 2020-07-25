import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import  OtherWindowRouter from '@/router/otherWindow.js'
const { Content, Sider } = Layout
// @withRouter
class otherWindow extends React.Component {
  render() {
    return (
    <BrowserRouter basename="/new">
        <Layout>
            <OtherWindowRouter />
        </Layout>
       </BrowserRouter>
    )
  }
}
export default otherWindow
