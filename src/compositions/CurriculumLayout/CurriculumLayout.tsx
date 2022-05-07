import {ReactElement, Fragment} from 'react';
import type {PropsType} from './types';

import {
  Container,
  TitleStyled,
  StyledStart,
  StyledWhite,
  SubContainer,
} from './styled';
import RenderHtml from 'components/RenderHtml';

const CurriculumLayout = ({
  data,
  type,
  topic,
  lesson,
  onClick,
}: PropsType): ReactElement => {
  const lessonLength = (lesson?.data?.contents || []).length;
  const findIndex = (lesson?.data?.contents || []).findIndex(
    (x) => x?._id === topic?.data?._id,
  );

  console.log(lessonLength, findIndex);
  return (
    <Fragment>
      <SubContainer>
        <TitleStyled>{data?.title}</TitleStyled>
        {data?.body && <RenderHtml source={data?.body} />}
      </SubContainer>

      <Container>
        {type === 'quiz' ? (
          <Fragment>
            <StyledWhite>Next</StyledWhite>
            <StyledStart onClick={onClick}>Start Quiz</StyledStart>
          </Fragment>
        ) : (
          <StyledStart>Next</StyledStart>
        )}
      </Container>
    </Fragment>
  );
};

export default CurriculumLayout;
