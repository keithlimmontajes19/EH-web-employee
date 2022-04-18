import {Fragment, ReactElement, useEffect, useState} from 'react';

import {
  IconText,
  Container,
  RatingText,
  TitleStyled,
  SubContainer,
  AuthorStyled,
  StyledButton,
  RenderContainer,
} from './styled';
import {Image, Row, Col} from 'antd';
import {NO_IMAGE} from 'utils/constants';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getContents, getLessonsDetail} from 'ducks/lms/actionCreator';

/* logos */
import USER_LOGO from 'assets/images/user-icon.png';
import BOOK_LOGO from 'assets/icons/book-icon.png';
import TIME_LOGO from 'assets/icons/time-icon.png';
import PENCIL_LOGO from 'assets/icons/pencil-icon.png';
import YOUTUBE_LOGO from 'assets/icons/youtube-icon.png';

/* conponents */
import Loading from 'components/Loading';
import IconImage from 'components/IconImage';
import RenderHtml from 'components/RenderHtml';
import RatingStar from 'components/RatingStar';

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

  const content = (
    <Fragment>
      {!id && !lessonId && (
        <Fragment>
          <Image
            width="100%"
            height={316}
            preview={false}
            src={curriculum?.preview?.ref ? curriculum?.preview?.ref : NO_IMAGE}
          />
          <SubContainer>
            <TitleStyled>{curriculum?.title}</TitleStyled>
            <Row>
              <Col span={10}>
                <Row>
                  <IconImage width={10} height={12} source={USER_LOGO} />
                  <AuthorStyled>
                    {curriculum?.instructor?.title}{' '}
                    {curriculum?.instructor?.name}
                  </AuthorStyled>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <RatingStar count={1} outOf={1} />
                  <RatingText>{curriculum?.averageUserRating || 1}</RatingText>
                </Row>
              </Col>
            </Row>

            <Row style={{marginTop: 24}}>
              <Col span={10}>
                <Row>
                  <IconImage width={20} height={14} source={BOOK_LOGO} />
                  <IconText>{curriculum?.stats?.lesson || 0} Lessons</IconText>
                </Row>
              </Col>
              <Col span={10}>
                <Row>
                  <IconImage width={18} height={14} source={PENCIL_LOGO} />
                  <IconText>{curriculum?.stats?.quiz || 0} Quiz</IconText>
                </Row>
              </Col>
            </Row>
            <Row style={{marginTop: 24}}>
              <Col span={10}>
                <Row>
                  <IconImage width={18} height={18} source={TIME_LOGO} />
                  <IconText>{curriculum?.stats?.topic || 0} Topics</IconText>
                </Row>
              </Col>
              <Col span={10}>
                <Row>
                  <IconImage width={20} height={16} source={YOUTUBE_LOGO} />
                  <IconText>{curriculum?.stats?.video || 0} Videos</IconText>
                </Row>
              </Col>
            </Row>
            <RenderContainer>
              <RenderHtml source={curriculum?.body} />
            </RenderContainer>
          </SubContainer>

          <StyledButton>Start Course</StyledButton>
        </Fragment>
      )}
    </Fragment>
  );

  return (
    <Container>
      {lessonDetails.loading || contents?.loading ? <Loading /> : content}
    </Container>
  );
};

export default ContentCurriculum;
