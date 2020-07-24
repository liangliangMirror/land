import React from 'react'
import { Layout } from 'antd'
import MyHeader from '@/components/myHeader'
import MySidebar from '@/components/mySidebar'
import ContentRouter from '@/components/contentRouter'
const { Header, Content, Sider } = Layout;
class Index extends React.Component {
  render() {
    return (
      <Layout className="App">
        <Header>
          <MyHeader></MyHeader>
        </Header>
        <Layout>
            <Sider width={200} style={{background:'#fff',height:'100%'}}>
                <MySidebar></MySidebar>
            </Sider>
            <Content>
              <ContentRouter />
            </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Index
