import {ReactElement, useState} from 'react';
import type {PropsType} from './types';

import {
  SubLabel,
  MenuLabel,
  TitleStyled,
  StyledLabel,
  MenuSublabel,
  MenuContainer,
} from './styled';
import {Menu} from 'antd';
import {theme} from 'utils/colors';
import {CaretRightOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const SidebarCurriculum = (props: PropsType): ReactElement => {
  const {lesson} = props;

  const [selected, setSelected] = useState('1');
  const colorCondition = (key: string) => {
    return selected === key ? theme.WHITE : theme.BLACK;
  };

  const subColorCondition = (key: string) => {
    return selected === key ? theme.WHITE : theme.SUBTITLE_GRAY;
  };

  const checkNullUndefined = (stats: string, label: string) => {
    return stats ? `${stats + ' ' + label}` : ' ';
  };

  return (
    <MenuContainer>
      <TitleStyled>Curriculum</TitleStyled>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{background: theme.SUB_LAYOUT}}
        onSelect={(e) => setSelected(e?.key)}
        expandIcon={(e) => <CaretRightOutlined rotate={e.isOpen ? 90 : 0} />}>
        <Menu.Item key={'1'}>
          <StyledLabel color={colorCondition('1')}>Introduction</StyledLabel>
        </Menu.Item>

        {(lesson.data || []).map((item) => {
          const stats = item?.stats;
          return (
            <SubMenu
              key="sub1"
              title={
                <StyledLabel color={colorCondition(item?.title)}>
                  {item?.title}
                  <SubLabel color={colorCondition(item?.title)}>
                    {checkNullUndefined(stats?.lesson, 'Lesson')}
                    {checkNullUndefined(stats?.topic, 'Topic')}
                    {checkNullUndefined(stats?.quiz, 'Quiz')}
                  </SubLabel>
                </StyledLabel>
              }>
              {(item?.contents || []).map((value) => (
                <Menu.Item
                  key={value?.title}
                  onClick={() => localStorage.setItem('topicId', value?._id)}>
                  <MenuLabel color={colorCondition(value?.title)}>
                    {value?.title}
                    <MenuSublabel color={subColorCondition(value?.title)}>
                      {value.description}
                    </MenuSublabel>
                  </MenuLabel>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </MenuContainer>
  );
};

export default SidebarCurriculum;
