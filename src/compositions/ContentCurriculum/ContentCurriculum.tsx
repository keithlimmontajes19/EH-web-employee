import {ReactElement, useEffect, useState} from 'react';
import {Container} from './styled';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getContents, getLessonsDetail} from 'ducks/lms/actionCreator';

/* conponents */
import Loading from 'components/Loading';
import TextComponent from 'compositions/TextComponent';
import ImageComponent from 'compositions/ImageComponent';
import VideoComponent from 'compositions/VideoComponent';
import IntroductionComponent from 'compositions/IntroductionComponent';

const ContentCurriculum = (): ReactElement => {
  const dispatch = useDispatch();

  const [id, setid] = useState('');
  const {topicId, lessonId, curriculum, contents, lessonDetails}: any =
    useSelector<RootState>((state) => state.lms);

  useEffect(() => {
    setid(topicId);
  }, [topicId]);

  useEffect(() => {
    if (!topicId && lessonId) dispatch(getContents());
    if (topicId && lessonId) dispatch(getLessonsDetail());
  }, [topicId, lessonId]);

  const header = (type, data) => {
    switch (type) {
      case 'image':
        return <ImageComponent data={data} />;
      case 'video':
        return <VideoComponent data={data} />;
      default:
        return <TextComponent data={data} />;
    }
  };

  const body = (type, data) => {
    return <></>;
  };

  const contentType = (type: string, data: any) => {
    const previewType = data?.preview?.type;

    switch (type) {
      case 'quiz':
        return <>2</>;
      case 'topic':
        return <>4</>;
      case 'activity':
        return <>3</>;
      case 'assignment':
        return <>1</>;
      default:
        return <>5</>;
    }
  };

  const render = () => {
    if (!id && !lessonId) {
      return <IntroductionComponent curriculum={curriculum} />;
    } else if (!topicId && lessonId) {
      const data = contents?.data;
      const previewType = contents?.data?.preview?.type;
      return header(previewType, data);
    } else {
      const data = lessonDetails?.data;
      const type = lessonDetails?.data?.contentType;
      return contentType(type, data);
    }
  };

  return (
    <Container>
      {lessonDetails.loading || contents?.loading ? <Loading /> : render()}
    </Container>
  );
};

export default ContentCurriculum;
