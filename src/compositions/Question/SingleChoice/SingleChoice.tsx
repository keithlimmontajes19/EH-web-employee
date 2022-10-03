import {useGetSingleQuestionAnswer} from 'api/questionsAPI'
import {useEffect} from 'react'
import styles from './SingleChoice.module.css'

export default function SingleChoice(props) {
  const {question, userAnswer, setUserAnswer} = props
  const {answer, choices} = question

  const {isLoading, isError, error, questionAnswer, tag}: any = useGetSingleQuestionAnswer(question._id)

  useEffect(() => {
    if (!isLoading && !isError) setUserAnswer(questionAnswer)
  }, [questionAnswer])

  return (!isLoading && <ul className={`${styles.choices}`}>
    {choices.map((choice, index) => {
      return <li
        key={index}
        className={`${styles.choice} ${userAnswer === choice && styles.selected}`}
        onClick={() => {
          setUserAnswer(choice)
        }}
      >
        <p>{choice}</p>
      </li>
    })}
  </ul>)
}
