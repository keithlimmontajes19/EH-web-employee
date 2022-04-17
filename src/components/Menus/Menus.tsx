import {ReactElement, useState} from 'react';
import type {PropsType} from './types';
import {Link} from 'react-router-dom';

/* styles icons utils*/
import {StyledMenus, StyledMenuItem, ItemsStyles, IconMapper} from './styled';
import {theme} from 'utils/colors';

/* components */
import Label from 'components/Label';

const Menus = (props: PropsType): ReactElement => {
  const {menus = []} = props;
  const [activeKey, setActiveKey] = useState('home');

  return (
    <>
      <StyledMenus onSelect={(e) => setActiveKey(e.key)}>
        {menus.map((x: any) => {
          const checkedActiveKey =
            activeKey === x?.key ? theme.SIDEBAR_ACTIVE : theme.WHITE;
          const checkActiveTitle =
            activeKey === x?.key ? theme.WHITE : theme.DEFAULT;

          return x?.subTitle ? (
            <div style={{marginTop: 32}}>
              <Label
                color={theme.SUBTITLE_GRAY}
                bold={600}
                size={12}
                lineHeight={18}
                key={x?.key}>
                {x?.subTitle}
              </Label>
            </div>
          ) : (
            <StyledMenuItem key={x?.key} activecolor={checkedActiveKey}>
              {!x?.subHeader ? (
                <div style={ItemsStyles}>
                  <Link to={x?.key}>
                    <Label
                      color={checkActiveTitle}
                      size={15}
                      bold={500}
                      lineHeight={18}
                      key={x?.key}>
                      {x?.icon && IconMapper(x.icon)}
                      {x?.title}
                    </Label>
                  </Link>
                </div>
              ) : (
                <div style={{paddingTop: 2}}>
                  <Link to={x?.key}>
                    <Label
                      color={checkActiveTitle}
                      size={15}
                      bold={500}
                      lineHeight={18}
                      key={x?.key}>
                      <span>{x?.icon && IconMapper(x.icon)}</span>
                      {x?.title}

                      <Label
                        color={checkActiveTitle}
                        size={12}
                        bold={400}
                        key={x?.key}>
                        <span style={{marginLeft: 30}}>{x?.subHeader}</span>
                      </Label>
                    </Label>
                  </Link>
                </div>
              )}
            </StyledMenuItem>
          );
        })}
      </StyledMenus>
    </>
  );
};

export default Menus;
