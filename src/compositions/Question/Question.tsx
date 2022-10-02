import {useState} from 'react'
import {useQueryClient} from 'react-query'
import {useGetSingleQuestion, useGetSingleQuestionAnswer, useSubmitQuestionAnswer} from 'api/questionsAPI'
import SingleChoice from './SingleChoice'
import styles from './Question.module.css'
import MultipleChoice from './MultipleChoice'
import Essay from './Essay'
import FillInTheBlanks from './FillInTheBlanks'
import Sort from './Sort'

export default function Question(props) {
  const {quiz, questions} = props
  const [questionPOS, setQuestionPOS] = useState(0)
  const [userAnswer, setUserAnswer] = useState(null)
  const queryClient = useQueryClient()

  const {isLoading, question} = useGetSingleQuestion(questions[questionPOS]._id)
  const submitQuestionAnswer = useSubmitQuestionAnswer({questionId: questions[questionPOS]._id})

  return <>
    <div className={`${styles.questionContainer}`}>
      <h3 className={`${styles.quizTitle}`}>{quiz?.title}</h3>
      <h4 className={`${styles.questionTitle}`}>{question?.title}</h4>
      {!isLoading && question?.questionType === 'single-choice' && <SingleChoice question={question} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />}
      {!isLoading && question?.questionType === 'multiple-choice' && <MultipleChoice question={question} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />}
      {!isLoading && question?.questionType === 'essay' && <Essay question={question} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />}
      {!isLoading && question?.questionType === 'fill-in-the-blanks' && <FillInTheBlanks question={question} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />}
      {!isLoading && question?.questionType === 'sort' && <Sort question={question} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />}
    </div>
    <div className={`${styles.questionNavigate}`}>
      {questionPOS > 0 && <button
        className={`${styles.backBtn}`}
        onClick={() => (setQuestionPOS((prev) => prev - 1))}
      >
        BACK
      </button>}
      {questionPOS < (questions.length - 1) && <button
        className={`${styles.nextBtn}`}
        onClick={() => {
          setQuestionPOS((prev) => prev + 1)
          submitQuestionAnswer.mutateAsync(userAnswer).then()
          queryClient.invalidateQueries([`/questions/${question._id}/answer`], {exact: true})
        }}
      >
        NEXT
      </button>}
      {questionPOS === (questions.length - 1) && <button
        className={`${styles.nextBtn}`}
        onClick={() => {
          submitQuestionAnswer.mutateAsync(userAnswer).then()
          queryClient.invalidateQueries([`/questions/${question._id}/answer`], {exact: true})
        }}
      >
        FINISH
      </button>}
    </div>
  </>
}
