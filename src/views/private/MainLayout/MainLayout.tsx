import {ReactElement, useState} from 'react';

/* styles and ant design */
import {theme} from 'utils/colors';
import {HeaderStyled} from './styled';
import {Layout, Menu} from 'antd';
import {useHistory} from 'react-router-dom';

/* components */
import NavigationContent from 'navigations/privateRoute';
import {
  TeamOutlined,
  HomeOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

const {Sider, Content} = Layout;
const MainLayout = (): ReactElement => {
  const history = useHistory();
  const [selected, setSelected] = useState('1');

  const colorCondition = (key: string) => {
    return selected === key ? theme.WHITE : theme.BLACK;
  };

  const pushHistory = (route: string) => {
    history.push(route);
  };

  return (
    <Layout>
      <HeaderStyled></HeaderStyled>
      <Layout>
        <Sider width={200} collapsed={false}>
          <Menu
            mode="inline"
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={['1']}
            onSelect={(e: any) => setSelected(e?.key)}
            style={{height: '100%', borderRight: 0}}>
            <Menu.Item
              key="1"
              style={{marginTop: 48}}
              onClick={() => pushHistory('/home')}
              icon={
                <HomeOutlined
                  style={{fontSize: 18, color: colorCondition('1')}}
                />
              }>
              <span
                style={{
                  color: colorCondition('1'),
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                Home
              </span>
            </Menu.Item>

            <Menu.Item
              key="2"
              onClick={() => pushHistory('/learn')}
              icon={
                <PlaySquareOutlined
                  style={{fontSize: 18, color: colorCondition('2')}}
                />
              }>
              <span
                style={{
                  color: colorCondition('2'),
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                Learn
              </span>
            </Menu.Item>

            <Menu.Item
              key="3"
              onClick={() => pushHistory('/team')}
              icon={
                <TeamOutlined
                  style={{fontSize: 18, color: colorCondition('3')}}
                />
              }>
              <span
                style={{
                  color: colorCondition('3'),
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                Team
              </span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{padding: 21, background: '#f8f8f8', minHeight: '98vh'}}>
          <Content>
            <NavigationContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
