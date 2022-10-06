import {createElement, useEffect} from 'react'
import {useGetSingleQuestionAnswer} from 'api/questionsAPI'
import styles from './FillInTheBlanks.module.css'

export default function FillInTheBlanks(props) {
  const {question, userAnswer, setUserAnswer} = props

  const {isLoading, isError, error, questionAnswer, tag}: any = useGetSingleQuestionAnswer(question._id)

  useEffect(() => {
    if (!isLoading && !isError) setUserAnswer(questionAnswer)
    else setUserAnswer({})
  }, [questionAnswer])

  if (userAnswer === null) return <></>

  const splitString = question?.description?.trim().split(/\s+/)
  const answerForm = createElement('div', {}, splitString.map((string, index) => {
    return <>
      {string === '____' ? <input
        type="text"
        defaultValue={userAnswer[index]}
        onChange={(e) => setUserAnswer((ans) => {
          ans[index] = e.target.value
          return ans
        })} />
      : <span> {string} </span>}
    </>
  }))

  return answerForm
}
