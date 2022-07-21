import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import {TeamOutlined, HomeOutlined, PlaySquareOutlined} from '@ant-design/icons'
import {Layout, Menu} from 'antd'
import {theme} from 'utils/colors'
import {MenuStyles} from './styled'

const {Sider} = Layout

const colorCondition = (pathname, key) => pathname === key ? theme.WHITE : theme.BLACK

export default function MainLayoutSideNav() {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  return <Sider width={200} collapsed={collapsed}>
    <Menu
      mode="inline"
      style={MenuStyles}
      defaultSelectedKeys={['/']}
      selectedKeys={[pathname]}
    >
      <Menu.Item
        key="/"
        style={{ marginTop: 48 }}
        onClick={() => navigate('/')}
        icon={
          <HomeOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition(pathname, '/'),
            }}
          />
        }>
        <span
          style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition(pathname, '/'),
          }}>
          Home
        </span>
      </Menu.Item>

      <Menu.Item
        key="/learn"
        onClick={() => navigate('/learn')}
        icon={
          <PlaySquareOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition(pathname, '/learn'),
            }}
          />
        }>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition(pathname, '/learn'),
          }}>
          Learn
        </span>
      </Menu.Item>

      <Menu.Item
        key="/team"
        onClick={() => navigate('/team')}
        icon={
          <TeamOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition(pathname, '/team'),
            }}
          />
        }>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition(pathname, '/team'),
          }}>
          Team
        </span>
      </Menu.Item>

      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: '100%',
          height: '50vh',
          cursor: 'pointer',
        }}
      />
    </Menu>
  </Sider>
}
