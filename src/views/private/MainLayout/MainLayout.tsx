import {ReactElement, useState} from 'react';

/* styles and ant design */
import {
  BellOutlined,
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

import {theme} from 'utils/colors';
import {useHistory} from 'react-router-dom';
import {Layout, Menu, Button, Row, Avatar, Col} from 'antd';
import {HeaderStyled, StyledLayout, LayoutStyles, SearchInput} from './styled';

/* components */
import NavigationContent from 'navigations/privateRoute';

const {Sider, Content} = Layout;

const MainLayout = (): ReactElement => {
  const history = useHistory();
  const [selected, setSelected] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  const colorCondition = (key: string) => {
    return selected === key ? theme.WHITE : theme.BLACK;
  };

  const pushHistory = (route: string) => {
    history.push(route);
  };

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <StyledLayout>
      <HeaderStyled>
        <Row style={{marginTop: 10}}>
          <Button
            style={{
              border: 'none',
              background: '#efeffe',
              marginLeft: -35,
              marginTop: 10,
            }}
            onClick={toggleCollapsed}>
            {collapsed ? (
              <MenuUnfoldOutlined style={{color: '#000', fontSize: 20}} />
            ) : (
              <MenuFoldOutlined style={{color: '#000', fontSize: 20}} />
            )}
          </Button>

          <div style={{display: 'flex', flex: 1}}>
            <SearchInput
              placeholder="Search for anything"
              prefix={
                <SearchOutlined style={{color: '#635FFA', fontSize: 18}} />
              }
            />
          </div>
          <BellOutlined
            style={{
              fontSize: 18,
              marginTop: 15,
              marginRight: 10,
              color: '#635FFA',
            }}
          />
          <Avatar size={50} icon={<UserOutlined />} />
        </Row>
      </HeaderStyled>

      <Layout>
        <Sider width={200} collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            onSelect={(e: any) => setSelected(e?.key)}
            style={{
              borderRight: 0,
              height: '100%',
              background: '#fdfdfd',
              boxShadow: '0px 0px 5px 3px rgba(43, 46, 74, 0.2);',
            }}>
            <Menu.Item
              key="1"
              style={{marginTop: 48}}
              onClick={() => pushHistory('/home')}
              icon={
                <HomeOutlined
                  style={{
                    fontSize: 20,
                    marginTop: 5,
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
              onClick={() => pushHistory('/learn')}
              icon={
                <PlaySquareOutlined
                  style={{
                    fontSize: 20,
                    marginTop: 5,
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
              onClick={() => pushHistory('/team')}
              icon={
                <TeamOutlined
                  style={{
                    fontSize: 20,
                    marginTop: 5,
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
          </Menu>
        </Sider>

        <Layout style={LayoutStyles}>
          <Content>
            <NavigationContent />
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};

export default MainLayout;
