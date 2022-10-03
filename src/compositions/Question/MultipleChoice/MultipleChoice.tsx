import {useGetSingleQuestionAnswer} from 'api/questionsAPI'
import {useEffect} from 'react'
import styles from './MultipleChoice.module.css'

export default function MultipleChoice(props) {
  const {question, userAnswer, setUserAnswer} = props
  const {answer, choices} = question

  const {isLoading, isError, error, questionAnswer, tag}: any = useGetSingleQuestionAnswer(question._id)

  useEffect(() => {
    if (!isLoading && !isError) setUserAnswer(questionAnswer)
    else setUserAnswer([])
  }, [questionAnswer])

  return (!isLoading && <ul className={`${styles.choices}`}>
    {choices.map((choice, index) => {
      return <li
        key={index}
        className={`${styles.choice} ${userAnswer?.includes(choice) && styles.selected}`}
        onClick={() => {
          if (userAnswer?.includes(choice)) {
            setUserAnswer((prev) => prev.filter((val) => val !== choice))
          } else {
            setUserAnswer((prev) => {
              if (!prev) return []
              return [...prev, choice]
            })
          }
        }}
      >
        <p>{choice}</p>
      </li>
    })}
  </ul>)
}
