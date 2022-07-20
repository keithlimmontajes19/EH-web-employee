import {Outlet} from 'react-router-dom'

import {Layout} from 'antd'
import {StyledLayout, LayoutStyles} from './styled'

import MainLayoutHeader from './MainLayoutHeader'
import MainLayoutSideNav from './MainLayoutSideNav'

const {Content} = Layout

export default function MainLayout() {
  return <StyledLayout>
    <MainLayoutHeader />
    <Layout>
      <MainLayoutSideNav />
      <Layout style={LayoutStyles}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </StyledLayout>
}
