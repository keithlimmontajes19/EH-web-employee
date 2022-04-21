import {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

import {
  Container,
  PageHeader,
  TitleStyled,
  ButtonStyled,
  ContentContainer,
} from './styled';
import {Row} from 'antd';
import {theme} from 'utils/colors';
import {ArrowLeftOutlined} from '@ant-design/icons';

/* components */
import RenderHtml from 'components/RenderHtml';
import TextComponent from 'compositions/TextComponent';
import ImageComponent from 'compositions/ImageComponent';
import VideoComponent from 'compositions/VideoComponent';
import TeamQuizSingleChoice from 'compositions/TeamQuizSingleChoice';
import TeamQuizMultipleChoice from 'compositions/TeamQuizMultipleChoice';

const ViewPageDetails = (): ReactElement => {
  const history = useHistory();

  const {
    page_details: {data},
  }: any = useSelector<RootState>((state) => state.team);

  const header = () => {
    if (data?.videoURL) {
      return <ImageComponent data={data} />;
    } else if (data?.imageURL) {
      return <VideoComponent data={data} />;
    } else {
      return <TextComponent data={data} />;
    }
  };

  const content = () => {
    if (data?.type) {
      return quizzes();
    } else {
      return data?.details && <RenderHtml source={data?.details} />;
    }
  };

  const quizzes = () => {
    return (data?.items || []).map((quiz) => {
      switch (quiz?.quiz_survey_type) {
        case 'survey':
        case 'single_choice':
          return <TeamQuizSingleChoice quiz={quiz} id={data?._id} />;
        case 'multiple_choice':
          return <TeamQuizMultipleChoice quiz={quiz} id={data?._id} />;
        default:
          return <></>;
      }
    });
  };

  return (
    <Container>
      <PageHeader>
        <Row>
          <ButtonStyled onClick={() => history.goBack()}>
            <ArrowLeftOutlined
              style={{color: theme.WHITE, marginLeft: -5, fontSize: 18}}
              size={50}
            />
          </ButtonStyled>
          <TitleStyled>{data?.title}</TitleStyled>
        </Row>
      </PageHeader>

      <>{header()}</>
      <ContentContainer>{content()}</ContentContainer>
    </Container>
  );
};

export default ViewPageDetails;
