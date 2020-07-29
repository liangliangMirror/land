import React from 'react'
import { Layout } from 'antd'
import MyHeader from '@/components/myHeader'
import { BrowserRouter } from 'react-router-dom'
import PageRouter from '@/router/pageRouter'
import './indexScss.scss'
const { Header,Content } = Layout
class Index extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Layout className="App">
          <Header>
            <MyHeader></MyHeader>
          </Header>
          <Content className="Content">
            <PageRouter />
          </Content>
        </Layout>
      </BrowserRouter>
    )
  }
}
export default Index
