import {useState} from 'react'
import styles from './MultipleChoice.module.css'

export default function MultipleChoice(props) {
  const {question} = props
  const {answer, choices} = question
  const [userAnswer, setUserAnswer] = useState([])

  return <ul className={`${styles.choices}`}>
    {choices.map((choice, index) => {
      return <li
        key={index}
        className={`${styles.choice} ${userAnswer.includes(choice) && styles.selected}`}
        onClick={() => {
          if (userAnswer.includes(choice)) {
            setUserAnswer((prev) => prev.filter((val) => val !== choice))
          } else {
            setUserAnswer((prev) => [...prev, choice])
          }
        }}
      >
        <p>{choice}</p>
      </li>
    })}
  </ul>
}
