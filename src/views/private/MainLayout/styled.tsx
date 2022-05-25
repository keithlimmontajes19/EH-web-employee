import styled from 'styled-components';
import {theme} from 'utils/colors';
import {Layout, Input} from 'antd';

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

export const HeaderStyled = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  min-height: 50px;
  border-radius: 0px;
  background: #efeffe;
  box-shadow: 0px 4px 5px 1px rgba(99, 95, 250, 0.15);
`;

export const StyledLayout = styled(Layout).attrs(() => ({
  style: {minHeight: '100vh'},
}))`
  .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child span {
    color: #000 !important;
    background: red;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    min-height: 50px;
    background: #635ffa88;
    color: black;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .ant-menu-item {
    min-height: 50px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export const LayoutStyles = {
  paddingTop: 21,
  paddingLeft: 21,
  background: '#f8f8f8',
  minHeight: '98vh',
};

export const SearchInput = styled(Input)`
  width: 497px;
  height: 45px;
  background: #ffffff;
  border-radius: 16px;
  margin-left: 160px;
`;

export const ButtonStyles = {
  marginTop: 5,
  border: 'none',
  background: '#efeffe',
};

export const CollapsedIcons = {color: '#000', fontSize: 20};
export const SearchStyles = {color: theme.LINK_TEXT, fontSize: 18};

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const BellContainer = styled.div`
  margin: 10px;
  margin-right: 35px;
`;

export const AvatarContainer = styled.div`
  margin-right: 35px;
`;

export const MenuStyles = {
  minHeight: '100%',
  background: '#fdfdfd',
  borderRight: '2px solid #f5f5fd',
  boxShadow: '0px 0px 5px 3px rgba(43, 46, 74, 0.2);',
};
