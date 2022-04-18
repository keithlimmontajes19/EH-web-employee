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
import {useHistory} from 'react-router-dom';

/* components */
import IconImage from 'components/IconImage';
import RatingStar from 'components/RatingStar';
import USER_LOGO from 'assets/images/user-icon.png';
import LEFT_ARROW from 'assets/icons/left-icon.png';
import RIGHT_ARROW from 'assets/icons/right-icon.png';

const LeftArrow = () => {
  const {scrollPrev} = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      style={{
        flex: 1,
        zIndex: 2,
        display: 'flex',
        marginRight: 10,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 5,
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
        padding: 5,
      }}>
      <IconImage source={LEFT_ARROW} width={23} height={104} />
    </div>
  );
};

const Card = ({item, itemId, onClick}) => {
  const visibility = React.useContext(VisibilityContext);
  const history = useHistory();

  visibility.isItemVisible(itemId);

  return (
    <Container
      onClick={() => {
        onClick(visibility);
        history.push('/learn/curriculum');
      }}
      tabIndex={0}>
      <Image
        width={380}
        height={180}
        preview={false}
        src={item?.preview?.ref ? item?.preview?.ref : NO_IMAGE}
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
          <SubtitleText>
            {item?.instructor?.title} {item?.instructor?.name}
          </SubtitleText>
        </FlexContainer>

        <RatingContainer>
          <FlexRow>
            <RatingStar count={1} outOf={1} />
            <RatingText>{item?.averageUserRating || 1}</RatingText>
          </FlexRow>
        </RatingContainer>
      </FlexRow>
    </Container>
  );
};

const MainCourseList = (props: any) => {
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
    <ScrollMenu
      LeftArrow={() => (props?.items.length ? LeftArrow() : <></>)}
      RightArrow={() => (props?.items.length ? RightArrow() : <></>)}
      options={{
        ratio: 0.9,
        rootMargin: '5px',
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
      }}>
      {props?.items.map((item) => (
        <Card
          item={item}
          key={item?._id}
          itemId={item?._id}
          onClick={handleClick(item?._id)}
        />
      ))}
    </ScrollMenu>
  );
};

export default MainCourseList;
