import React from 'react'
import { Layout } from 'antd'
import {  withRouter,BrowserRouter } from 'react-router-dom'
import MySidebar from '@/components/mySidebar'
import ContentRouter from '@/router/contentRouter'
const { Content, Sider } = Layout
// @withRouter
class WorkPlatform extends React.Component {
  render() {
    return (
    <BrowserRouter basename="/work">
      <Layout>
        <Sider width={200} style={{ background: '#fff', height: '100%' }}>
          <MySidebar></MySidebar>
        </Sider>
        <Content>
          <ContentRouter />
        </Content>
      </Layout>
       </BrowserRouter>
    )
  }
}
export default WorkPlatform
