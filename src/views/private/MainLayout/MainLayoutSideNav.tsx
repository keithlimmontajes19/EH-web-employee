import {useCallback, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {TeamOutlined, HomeOutlined, PlaySquareOutlined} from '@ant-design/icons'
import {Layout, Menu} from 'antd'
import {theme} from 'utils/colors'
import {MenuStyles} from './styled'

const {Sider} = Layout

export default function MainLayoutSideNav() {
  const navigate = useNavigate()

  const [selected, setSelected] = useState('1')
  const [collapsed, setCollapsed] = useState(false)

  const colorCondition = (key) => selected === key ? theme.WHITE : theme.BLACK

  return <Sider width={200} collapsed={collapsed}>
    <Menu
      mode="inline"
      style={MenuStyles}
      defaultSelectedKeys={['1']}
      onSelect={(e) => setSelected(e?.key)}>
      <Menu.Item
        key="1"
        style={{ marginTop: 48 }}
        onClick={() => navigate('/')}
        icon={
          <HomeOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition('1'),
            }}
          />
        }>
        <span
          style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition('1'),
          }}>
          Home
        </span>
      </Menu.Item>

      <Menu.Item
        key="2"
        onClick={() => navigate('/learn')}
        icon={
          <PlaySquareOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition('2'),
            }}
          />
        }>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition('2'),
          }}>
          Learn
        </span>
      </Menu.Item>

      <Menu.Item
        key="3"
        onClick={() => navigate('/team')}
        icon={
          <TeamOutlined
            style={{
              fontSize: 20,
              marginTop: collapsed ? 6 : 0,
              color: colorCondition('3'),
            }}
          />
        }>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: colorCondition('3'),
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
