import React from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import {
  FlexRow,
  Container,
  RatingText,
  UserStyles,
  TitleCourse,
  SubtitleText,
  FlexContainer,
  ImageContainer,
  RatingContainer,
} from './styled';
import {Image} from 'antd';
import {NO_IMAGE} from 'utils/constants';

/* icons */
import IconImage from 'components/IconImage';
import USER_LOGO from 'assets/images/user-icon.png';
import LEFT_ARROW from 'assets/icons/left-icon.png';
import RIGHT_ARROW from 'assets/icons/right-icon.png';

/* components */
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

      <Image
        width={380}
        height={180}
        preview={false}
        src={item?.img ? item?.img : NO_IMAGE}
      />
      <TitleCourse>{item?.title}</TitleCourse>
      <FlexRow>
        <FlexContainer>
          <ImageContainer>
            <IconImage
              width={10}
              height={12}
              source={USER_LOGO}
              styles={UserStyles}
            />
          </ImageContainer>
          <SubtitleText>{item?.author}</SubtitleText>
        </FlexContainer>

        <RatingContainer>
          <FlexRow>
            <RatingStar count={1} outOf={1} />
            <RatingText>4.8</RatingText>
          </FlexRow>
        </RatingContainer>
      </FlexRow>
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
        <Card key={item?._id} item={item} onClick={handleClick(item?._id)} />
      ))}
    </ScrollMenu>
  );
};

export default MainCourseList;
