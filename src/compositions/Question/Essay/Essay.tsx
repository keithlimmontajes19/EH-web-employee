import {useGetSingleQuestionAnswer} from 'api/questionsAPI'
import {useEffect} from 'react'
import styles from './Essay.module.css'

export default function Essay(props) {
  const {question, userAnswer, setUserAnswer} = props
  const {answer, choices} = question

  const {isLoading, isError, error, questionAnswer, tag}: any = useGetSingleQuestionAnswer(question._id)

  useEffect(() => {
    if (!isLoading && !isError) setUserAnswer(questionAnswer)
  }, [questionAnswer])

  return (!isLoading && <div className={`${styles.answerContainer}`}>
    <textarea
      className={`${styles.answerbox}`}
      value={userAnswer || ''}
      onChange={(e) => setUserAnswer(e.target.value)}
      placeholder="Type your response here"
    />
    <p className={`${styles.info}`}>This response will be reviewed and graded after submission</p>
  </div>)
}
