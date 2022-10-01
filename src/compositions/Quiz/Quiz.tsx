import {useState} from 'react'
import {useGetQuizQuestions} from 'api/quizzesAPI'
import styles from './Quiz.module.css'
import Question from 'compositions/Question'

export default function Quiz(props) {
  const {quiz} = props
  const [quizStarted, setQuizStarted] = useState(false)
  const [questionPOS, setQuestionPOS] = useState(0)

  const {isLoading, questions} = useGetQuizQuestions(quiz._id)

  return <>
    {!isLoading && !quizStarted && <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>{quiz?.title}</h2>
      <p className={`${styles.description}`}>{quiz?.description}</p>
      <div className={`${styles.startQuizContainer}`}>
        <button
          className={`${styles.startQuizBtn}`}
          onClick={() => {
            setQuizStarted(true)
          }}
        >
          START QUIZ
        </button>
      </div>
    </div>}

    {!isLoading && quizStarted && <div className={`${styles.container} ${styles.questionContainer}`}>
      <Question
        quiz={quiz}
        questions={questions}
        questionPOS={questionPOS}
      />
      <div className={`${styles.questionNavigate}`}>
        <button className={`${styles.backBtn}`}>BACK</button>
        <button className={`${styles.nextBtn}`}>NEXT</button>
      </div>
    </div>}
  </>
}
