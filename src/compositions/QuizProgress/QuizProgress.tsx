import {ReactElement, useEffect} from 'react';
import {TextStyled, SubText} from './styled';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

const QuizProgress = ({setProgress}: any): ReactElement => {
  const {data, loading}: any = useSelector<RootState>(
    (states) => states.lms.quizResults,
  );

  const percentage = () => {
    const points = data?.data?.correctAnswerCount || 0;
    const totalQuestions = data?.data?.questionCount || 0;
    const average = points / totalQuestions;

    return average || 0;
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setProgress('results');
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      <TextStyled>Results</TextStyled>
      <SubText>
        Quiz complete. <br />
        Results are being recorded.
      </SubText>

      <br />
      <br />
      <SubText>{percentage() * 100} %</SubText>
    </>
  );
};

export default QuizProgress;
