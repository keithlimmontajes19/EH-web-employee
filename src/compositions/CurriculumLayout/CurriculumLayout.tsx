import {ReactElement} from 'react';
import type {PropsType} from './types';

import {SubContainer, TitleStyled, StyledStart, StyledWhite} from './styled';
import RenderHtml from 'components/RenderHtml';

const CurriculumLayout = ({data}: PropsType): ReactElement => {
  return (
    <>
      <SubContainer>
        <TitleStyled>{data?.title}</TitleStyled>
        {data?.body && <RenderHtml source={data?.body} />}
      </SubContainer>

      <StyledWhite>Next Lesson</StyledWhite>
      <StyledStart>Start Quiz</StyledStart>
    </>
  );
};

export default CurriculumLayout;
