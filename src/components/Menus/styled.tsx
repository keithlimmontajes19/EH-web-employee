import styled from 'styled-components';
import {Menu} from 'antd';
import {
  Home,
  User,
  Save,
  FileText,
  Monitor,
  Tablet,
  MessageSquare,
} from 'react-feather';

export const StyledMenus = styled(Menu).attrs((props) => ({
  ...props,
  style: {
    paddingRight: 15,
    paddingLeft: 15,
  },
}))``;

export const StyledMenuItem = styled(Menu.Item).attrs((props: any) => ({
  ...props,
  style: {
    background: props.activecolor,
    borderRadius: 6,
  },
}))``;

export const ItemsStyles = {
  paddingTop: 10,
};

export const IconStyles = {marginTop: -5, marginRight: 10};
export const IconMapper = (name: string) => {
  switch (name) {
    case 'Home':
      return <Home size={18} style={IconStyles} />;
    case 'Monitor':
      return <Monitor size={20} style={{marginRight: 10}} />;
    case 'Tablet':
      return <Tablet size={20} style={{marginRight: 10}} />;
    case 'User':
      return <User size={18} style={IconStyles} />;
    case 'Save':
      return <Save size={18} style={IconStyles} />;
    case 'FileText':
      return <FileText size={18} style={IconStyles} />;

    case 'MessageSquare':
      return <MessageSquare size={18} style={IconStyles} />;
  }
};
