import {useGetSingleQuestion} from 'api/questionsAPI'
import styles from './Question.module.css'

export default function Question(props) {
  const {quiz, questions, questionPOS} = props
  const {isLoading, question} = useGetSingleQuestion(questions[questionPOS]._id)

  if (!isLoading) console.log(question)

  return <div className={`${styles.questionContainer}`}>
  </div>
}
