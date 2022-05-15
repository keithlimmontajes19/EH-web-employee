import {Fragment, ReactElement, useEffect, useState} from 'react';
import type {PropsType} from './types';

import {InputStyled, FooterStyled} from './styled';
import {TitleStyled, QuestionStyled} from 'compositions/QuizStepper/styled';

import {setQuizId} from 'utils/helpers';

const QuizEssay = ({item, submit}: PropsType): ReactElement => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (item) {
      setQuizId(item?._id);
    }
  }, []);

  useEffect(() => {
    submit(selected);
  }, [selected]);

  return (
    <Fragment>
      <TitleStyled>{item?.title}</TitleStyled>
      <QuestionStyled>{item?.description}</QuestionStyled>
      <InputStyled
        value={selected}
        placeholder="Type your response here"
        onChange={(e) => setSelected(e.target.value)}
      />
      <FooterStyled>
        This response will be reviewed and graded after submission.
      </FooterStyled>
    </Fragment>
  );
};

export default QuizEssay;
