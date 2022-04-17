import React from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import LEFT_ARROW from 'assets/icons/left-icon.png';
import RIGHT_ARROW from 'assets/icons/right-icon.png';
import USER_LOGO from 'assets/images/user-icon.png';
import IconImage from 'components/IconImage';

import {
  Container,
  UserStyles,
  DetailsRow,
  ImageStyles,
  FlexContainer,
  DetailsContainer,
} from './styled';
import {theme} from 'utils/colors';

/* components */
import Label from 'components/Label';
import RatingStar from 'components/RatingStar';

const LeftArrow = () => {
  const {scrollPrev} = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      style={{
        flex: 1,
        display: 'flex',
        marginRight: 10,
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <IconImage source={RIGHT_ARROW} width={23} height={104} />
    </div>
  );
};

const RightArrow = () => {
  const {scrollNext} = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollNext()}
      style={{
        flex: 1,
        zIndex: 2,
        display: 'flex',
        marginLeft: 10,
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <IconImage source={LEFT_ARROW} width={23} height={104} />
    </div>
  );
};

const Card = ({onClick, item}) => {
  const visibility = React.useContext(VisibilityContext);
  return (
    <div onClick={() => onClick(visibility)} tabIndex={0}>
      <div>{renderItem(item, visibility)}</div>
    </div>
  );
};

const renderItem = (item: any, visibility: any) => {
  return (
    <Container>
      {visibility.isItemVisible(item?._id)}
      <IconImage
        source={item?.img}
        width={380}
        height={180}
        styles={ImageStyles}
      />
      <DetailsContainer>
        <Label size={14}>{item?.title}</Label>
        <DetailsRow>
          <FlexContainer>
            {/* <IconImage
              width={8}
              height={10}
              source={USER_LOGO}
              styles={UserStyles}
            />
            <Label color={theme.BLACK} left={5}>
              {item?.author}
            </Label> */}
          </FlexContainer>
          {/* <Label size={14} color={theme.BLACK} bold="bold">
            <RatingStar count={1} outOf={1} /> 4.8
          </Label> */}
        </DetailsRow>
      </DetailsContainer>
    </Container>
  );
};

const MainCourseList = ({items}: any) => {
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id),
    );
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((item) => (
        <Card
          item={item}
          onClick={handleClick(item?._id)}
          // selected={isItemSelected(item?._id)}
        />
      ))}
    </ScrollMenu>
  );
};

export default MainCourseList;
