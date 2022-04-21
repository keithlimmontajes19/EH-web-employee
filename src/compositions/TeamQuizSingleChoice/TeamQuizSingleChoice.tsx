import {Fragment, ReactElement, useState, useEffect} from 'react';
import type {PropsType} from './types';

import {
  StyledStart,
  TitleStyled,
  QuestionStyled,
  ChoicesContainer,
  DescriptionStyled,
} from './styled';
import {theme} from 'utils/colors';

/* reducer action */
import {useDispatch, useSelector} from 'react-redux';
import {postQuizAction, getOneQuiz} from 'ducks/teams/actionCreator';

const TeamQuizSingleChoice = ({item, quiz, id}: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  // const [modal, setModal] = useState(false);
  // const [allAnswers, setAllAnswer] = useState(['']);
  // const [questionAnswer, setQuestionAnswer] = useState([]);

  useEffect(() => {
    dispatch(getOneQuiz(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   setModal(submitQuiz?.modalShow);
  // }, [submitQuiz]);

  // const submitQuiz: any = useSelector<any>((state) => state.team.submitQuiz);
  const {data, loading}: any = useSelector<any>(
    (state) => state.team.getOneQuiz,
  );

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
      <TitleStyled>{quiz?.name}</TitleStyled>
      <DescriptionStyled>{quiz?.description}</DescriptionStyled>

      {(quiz?.quiz_survey_questions || []).map((x) => {
        return (
          <div key={x?._id}>
            <QuestionStyled>{x?.question}</QuestionStyled>
            {(x?.question_choices || []).map((value) => renderItem(value))}
          </div>
        );
      })}

      <StyledStart disabled={data ? true : false}>Submit</StyledStart>
    </Fragment>
  );
};

export default TeamQuizSingleChoice;
