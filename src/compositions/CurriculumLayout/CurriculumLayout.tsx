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

const CurriculumLayout = ({data, type, onClick}: PropsType): ReactElement => {
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
