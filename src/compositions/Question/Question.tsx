import {useGetSingleQuestion} from 'api/questionsAPI'
import SingleChoice from './SingleChoice'
import styles from './Question.module.css'
import MultipleChoice from './MultipleChoice'
import Essay from './Essay'
import FillInTheBlanks from './FillInTheBlanks'
import Sort from './Sort'

export default function Question(props) {
  const {quiz, questions, questionPOS} = props
  const {isLoading, question} = useGetSingleQuestion(questions[questionPOS]._id)

  return <div className={`${styles.questionContainer}`}>
    <h3 className={`${styles.quizTitle}`}>{quiz?.title}</h3>
    <h4 className={`${styles.questionTitle}`}>{question?.title}</h4>
    {!isLoading && question?.questionType === 'single-choice' && <SingleChoice question={question} />}
    {!isLoading && question?.questionType === 'multiple-choice' && <MultipleChoice question={question} />}
    {!isLoading && question?.questionType === 'essay' && <Essay question={question} />}
    {!isLoading && question?.questionType === 'fill-in-the-blanks' && <FillInTheBlanks question={question} />}
    {!isLoading && question?.questionType === 'sort' && <Sort question={question} />}
  </div>
}
