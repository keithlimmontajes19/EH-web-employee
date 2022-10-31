import {ReactElement, useEffect} from 'react';
import NO_ANNOUNCEMENT from 'assets/icons/announcement.png';

import {
  StyledHeader,
  CarouselContainer,
  NoAnnouncementContainer,
} from './styled';

import {Image} from 'antd';
import {Carousel} from 'react-responsive-carousel';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getAnnouncements} from 'ducks/announcement/actionCreator';

import ReactPlayer from 'react-player';
import IconImage from 'components/IconImage';
import {ReactPlayerProps} from 'react-player/types/lib';

const CarouselAnnouncement = (): ReactElement => {
  const dispatch = useDispatch();

  const {data}: any = useSelector<RootState>((state) => state.announcement);

  const ReactPlayerProps = ReactPlayer as unknown as React.FC<ReactPlayerProps>;

  useEffect(() => {
    dispatch(getAnnouncements());
  }, []);

  const carouseContent = (item: any) => {
    if (item?.imageURL) {
      return (
        <div
          key={item?._id}
          style={{borderRadius: 15, maxHeight: 430, minHeight: 450}}>
          <Image
            width="100%"
            height={452}
            src={item?.imageURL}
            style={{borderRadius: 15}}
          />
        </div>
      );
    } else if (item?.videoURL) {
      return (
        <div className="player-wrapper">
          <ReactPlayerProps
            playing
            controls={true}
            width={'100%'}
            height={'100%'}
            url={[
              {
                src: item?.videoURL,
                type: 'video/mp4',
              },
            ]}
          />
        </div>
      );
    } else {
      return (
        <div
          key={item?._id}
          style={{borderRadius: 15, maxHeight: 430, minHeight: 450}}>
          <p>{item?.title}</p>
          <p>{item?.description}</p>
        </div>
      );
    }
  };

  const carouselAnnouncement = () => {
    return (
      <CarouselContainer>
        <Carousel
          width="100%"
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}>
          {(data || []).map((item) => carouseContent(item))}
        </Carousel>
      </CarouselContainer>
    );
  };

  const noAnnouncement = () => {
    return (
      <NoAnnouncementContainer>
        <IconImage source={NO_ANNOUNCEMENT} height={124} width={124} />
        <StyledHeader>No Announcement</StyledHeader>
      </NoAnnouncementContainer>
    );
  };

  return data?.length ? carouselAnnouncement() : noAnnouncement();
};

export default CarouselAnnouncement;
