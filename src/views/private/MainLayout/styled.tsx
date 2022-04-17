import styled from 'styled-components';
import {theme} from 'utils/colors';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

export const Container = styled.div``;
export const Logostyles = {
  width: 150,
  height: 33,
};

export const LogoContainer = {
  paddingLeft: 19,
  paddingTop: 22,
  paddingBottom: 27,
};

export const MainLayoutStyles = {minHeight: '100vh'};
export const Siderstyles = {background: theme.WHITE};

export const HeaderStyled = styled(Header)`
  opacity: 0.1;
  background: #635ffa;
  border-radius: 0px;
  box-shadow: 0px 4px 5px 1px rgba(99, 95, 250, 0.15);
  height: 100px;
`;
