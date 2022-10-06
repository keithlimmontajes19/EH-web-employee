import {useEffect} from 'react'
import {useGetSingleQuestionAnswer} from 'api/questionsAPI'
import styles from './Sort.module.css'

export default function Sort(props) {
  const {question, userAnswer, setUserAnswer} = props
  const {isLoading, isError, error, questionAnswer, tag}: any = useGetSingleQuestionAnswer(question._id)

  useEffect(() => {
    if (!isLoading && !isError) {
      if (!areEqual(questionAnswer, question.answer)) setUserAnswer(() => shuffle(question.answer))
      else setUserAnswer(() => questionAnswer)
    }
  }, [isLoading])

  if (userAnswer === null) return <></>

  return <></>
}

function areEqual(a, b) {return JSON.stringify(a.sort()) === JSON.stringify(b.sort())}
function shuffle(arr) {return arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)}
