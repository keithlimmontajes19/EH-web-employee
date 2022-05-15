import {ReactElement, useState} from 'react';

/* styles and ant design */
import {
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
import {Layout, Menu, Button, Avatar, Badge} from 'antd';
import {
  MenuStyles,
  SearchInput,
  HeaderStyled,
  StyledLayout,
  LayoutStyles,
  ButtonStyles,
  SearchStyles,
  BellContainer,
  CollapsedIcons,
  AvatarContainer,
  SearchContainer,
} from './styled';

/* components */
import ICON_BELL from 'assets/icons/bell-blue.png';
import NavigationContent from 'navigations/privateRoute';
import IconImage from 'components/IconImage';

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
        <SearchContainer>
          <SearchInput
            placeholder="Search for anything"
            prefix={<SearchOutlined style={SearchStyles} />}
          />
        </SearchContainer>

        <BellContainer>
          <Badge dot={true}>
            <IconImage width={19} height={22} source={ICON_BELL} />
          </Badge>
        </BellContainer>

        <AvatarContainer>
          <Avatar size={50} icon={<UserOutlined />} />
        </AvatarContainer>
      </HeaderStyled>

      <Layout>
        <Sider
          width={200}
          collapsed={collapsed}
          //onMouseOver={() => setCollapsed(false)}
        >
          <Menu
            mode="inline"
            style={MenuStyles}
            defaultSelectedKeys={['1']}
            onSelect={(e: any) => setSelected(e?.key)}>
            <Menu.Item
              key="1"
              style={{marginTop: 48}}
              onClick={() => pushHistory('/home')}
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
              onClick={() => pushHistory('/learn')}
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
              onClick={() => pushHistory('/team')}
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
