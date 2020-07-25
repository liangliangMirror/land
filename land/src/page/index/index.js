import React from 'react'
import { Layout } from 'antd'
import MyHeader from '@/components/myHeader'
import { BrowserRouter} from 'react-router-dom'
import PageRouter from '@/router/pageRouter'
const { Header} = Layout;
class Index extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
      <Layout className="App">
        <Header>
          <MyHeader></MyHeader>
        </Header>
          <PageRouter />
      </Layout>
      </BrowserRouter>
    )
  }
}
export default Index
