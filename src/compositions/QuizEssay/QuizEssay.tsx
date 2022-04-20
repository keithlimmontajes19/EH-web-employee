import {Fragment, ReactElement} from 'react';
import type {PropsType} from './types';

import {InputStyled, FooterStyled} from './styled';
import {TitleStyled, QuestionStyled} from 'compositions/QuizStepper/styled';

const QuizEssay = ({item}: PropsType): ReactElement => {
  return (
    <Fragment>
      <TitleStyled>{item?.title}</TitleStyled>
      <QuestionStyled>{item?.description}</QuestionStyled>
      <InputStyled placeholder="Type your response here" />
      <FooterStyled>
        This response will be reviewed and graded after submission.
      </FooterStyled>
    </Fragment>
  );
};

export default QuizEssay;
