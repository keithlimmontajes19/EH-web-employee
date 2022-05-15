import React from 'react';

import {
  Container,
  CardStyled,
  TextStyled,
  LabelStyled,
  CarouselContainer,
} from './styled';

import IconImage from 'components/IconImage';
import ANNOUNCEMENT from 'assets/icons/announcement.png';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import VideoComponent from 'compositions/VideoComponent';
import ImageComponent from 'compositions/ImageComponent';

const Announcement = (props) => {
  const {data} = useSelector((states) => states.announcement);

  const noAnnouncement = () => (
    <CardStyled>
      <Container>
        <IconImage source={ANNOUNCEMENT} height={124} width={124} />
      </Container>
      <LabelStyled>No Announcement</LabelStyled>
    </CardStyled>
  );

  const textImageVideo = (item) => {
    if (item?.imageURL) {
      return <ImageComponent data={item?.imageURL} />;
    } else if (item?.videoURL) {
      return <VideoComponent data={item?.videoURL} />;
    } else {
      return <p>{item?.description}</p>;
    }
  };

  const renderItem = () => {
    return (
      <Slider>
        {(data || []).map((item, index) => {
          return (
            <Slide
              index={index}
              style={{
                overflowY: 'auto',
                scrollbarWidth: 'None',
              }}>
              <TextStyled>{item?.title}</TextStyled>
              {textImageVideo(item)}
            </Slide>
          );
        })}
      </Slider>
    );
  };

  const content = () => (
    <CarouselContainer>
      <CarouselProvider
        totalSlides={data.length || 0}
        naturalSlideWidth={100}
        naturalSlideHeight={75}>
        {renderItem()}
      </CarouselProvider>
    </CarouselContainer>
  );

  return (data || []).length ? content() : noAnnouncement();
};

export default Announcement;
