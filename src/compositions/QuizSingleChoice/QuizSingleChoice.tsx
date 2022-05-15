import {Fragment, ReactElement, useState, useEffect} from 'react';
import type {PropsType} from './types';

import {theme} from 'utils/colors';
import {setQuizId} from 'utils/helpers';
import {ChoicesContainer} from './styled';
import {TitleStyled, QuestionStyled} from 'compositions/QuizStepper/styled';

const QuizSingleChoice = ({item, submit}: PropsType): ReactElement => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (item) {
      setQuizId(item?._id);
    }
  }, []);

  useEffect(() => {
    submit(selected);
  }, [selected]);

  const renderItem = (value) => {
    return (
      <ChoicesContainer
        key={value}
        onClick={() => setSelected(value)}
        border={selected === value ? theme.LINK_TEXT : theme.WHITE}>
        <p style={{padding: 20}} color={theme.LIGHT_GRAY}>
          {value}
        </p>
      </ChoicesContainer>
    );
  };

  return (
    <Fragment>
      <TitleStyled>{item?.title}</TitleStyled>
      <QuestionStyled>{item?.description}</QuestionStyled>
      {(item?.resource?.choices || []).map((value) => renderItem(value))}
    </Fragment>
  );
};

export default QuizSingleChoice;
