import {ReactElement, useState, useEffect} from 'react';
import type {PropsType} from './types';

import {theme} from 'utils/colors';
import {
  StyledStart,
  TitleStyled,
  TextContainer,
  QuestionStyled,
  DescriptionStyled,
  FlexWrapContainer,
} from './styled';
/* reducer action */
import {useDispatch, useSelector} from 'react-redux';
import {postQuizAction, getOneQuiz} from 'ducks/teams/actionCreator';

const TeamQuizMultipleChoice = ({item, quiz, id}: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
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
  const {states, loading}: any = useSelector<any>((state) => state.team);

  const checkIfArrayExist = (name: any) => {
    return selected.includes(name);
  };

  const addRemoveChoice = (value: any) => {
    const checkNameExist = checkIfArrayExist(value);
    if (checkNameExist) {
      const reiterateItems = [...selected];
      const findItem = selected.findIndex((x) => x === value);

      reiterateItems.splice(findItem, 1);
      setSelected(reiterateItems);
    } else {
      const newItems = [...selected];

      newItems.push(value);
      setSelected(newItems);
    }
  };

  const helperCheck = (name: string, type: number) => {
    const type1 = !checkIfArrayExist(name) ? theme.WHITE : theme.LINK_TEXT;
    const type2 = checkIfArrayExist(name) ? theme.WHITE : theme.LINK_TEXT;
    return type === 1 ? type1 : type2;
  };

  return (
    <>
      <TitleStyled>{quiz?.name}</TitleStyled>
      <DescriptionStyled>{quiz?.description}</DescriptionStyled>

      {(quiz?.quiz_survey_questions || []).map((choice) => {
        return (
          <div key={choice?._id}>
            <QuestionStyled>{choice?.question} </QuestionStyled>

            {(choice?.question_choices || []).map((value, index) => {
              return (
                <FlexWrapContainer key={index.toString()}>
                  <div onClick={() => addRemoveChoice(value)}>
                    <TextContainer background={helperCheck(value, 1)}>
                      <span
                        style={{
                          padding: 10,
                          fontSize: 18,
                          color: helperCheck(value, 2),
                        }}>
                        {value}
                      </span>
                    </TextContainer>
                  </div>
                </FlexWrapContainer>
              );
            })}
          </div>
        );
      })}

      <StyledStart disabled={states?.getOneQuiz?.data ? true : false}>
        Submit
      </StyledStart>
    </>
  );
};

export default TeamQuizMultipleChoice;
