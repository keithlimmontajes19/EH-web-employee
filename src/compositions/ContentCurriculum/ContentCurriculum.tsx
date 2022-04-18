import {ReactElement, useEffect, useState} from 'react';
import {Container} from './styled';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getContents, getLessonsDetail} from 'ducks/lms/actionCreator';

/* conponents */
import Loading from 'components/Loading';
import IntroductionComponent from 'compositions/IntroductionComponent';
import ImageComponent from 'compositions/ImageComponent';
import VideoComponent from 'compositions/VideoComponent';
import TextComponent from 'compositions/TextComponent';

const ContentCurriculum = (): ReactElement => {
  const dispatch = useDispatch();
  const [id, setid] = useState('');

  const {topicId, lessonId, curriculum, contents, lessonDetails}: any =
    useSelector<RootState>((state) => state.lms);

  useEffect(() => {
    setid(topicId);
  }, [topicId]);

  useEffect(() => {
    if (!topicId && lessonId) {
      dispatch(getContents());
    }

    if (topicId && lessonId) {
      dispatch(getLessonsDetail());
    }
  }, [topicId, lessonId]);

  const contentChecker = (type, data) => {
    switch (type) {
      case 'image':
        return <ImageComponent data={data} />;
      case 'video':
        return <VideoComponent />;
      default:
        return <TextComponent />;
    }
  };

  const content = () => {
    if (!id && !lessonId) {
      return <IntroductionComponent curriculum={curriculum} />;
    } else if (!topicId && lessonId) {
      return contentChecker(contents?.data?.preview?.type, contents?.data);
    } else {
      // check contentType for quiz assignments video or images
      return contentChecker(contents?.data?.preview?.type, lessonDetails?.data);
    }
  };

  return (
    <Container>
      {lessonDetails.loading || contents?.loading ? <Loading /> : content()}
    </Container>
  );
};

export default ContentCurriculum;
