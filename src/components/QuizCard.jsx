import { useEffect, useState } from 'react'
import sampleQuestions from '../data/sampleQuestions'

const QuizCard = ({ selectedCategory, onQuizCompleted }) => {
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [timer, setTimer] = useState(10)
  const [unansweredQuestions, setUnansweredQuestions] = useState(0)

  const questions = sampleQuestions[selectedCategory] || []

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion(true)
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000)
    return () => clearInterval(interval)
  }, [timer])

  const handleNextQuestion = (questionTimedOut = false) => {
    if (selectedOption === null && questionTimedOut) {
      setUnansweredQuestions((prev) => prev + 1)
    }

    const nextQuestionIndex = currentQuestionIndex + 1

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
      setSelectedOption(null)
      setTimer(10)
    } else {
      onQuizCompleted(correctCount, {
        correct: correctCount,
        incorrect: incorrectCount,
        unanswered:
          selectedOption === null && !questionTimedOut
            ? unansweredQuestions + 1
            : unansweredQuestions
      })
    }
  }

  const handleOptionSelected = (option) => {
    // if (selectedOption !== null) {
    //   toast.error('Option already selected')
    //   return
    // }

    setSelectedOption(option)
    if (option === questions[currentQuestionIndex].answer) {
      setCorrectCount((c) => c + 1)
    } else {
      setIncorrectCount((ic) => ic + 1)
    }
  }

  if (!questions.length) {
    return (
      <div className="">
        No questions found for this category. Please selecte another category by
        restarting the quiz
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="w-md md:w-3xl lg:w-4xl mx-auto mt-10">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <div className="text-4xl">
            {`${currentQuestionIndex + 1}/${questions.length}`}
          </div>
          <div className="">{`0:${timer}`}</div>
        </div>
        <div>
          <progress
            className="w-full"
            value={currentQuestionIndex + 1}
            max={questions.length}
          />
        </div>
        <div className="flex text-xl md:text-3xl font-semibold">
          <div className="">{currentQuestionIndex + 1}.</div>
          <div className="">{currentQuestion.question}</div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentQuestion &&
              currentQuestion.options &&
              currentQuestion.options.map((opt, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center cursor-pointer gap-4 border rounded border-gray-300 ${
                    selectedOption === opt
                      ? 'border-primary'
                      : 'border-gray-300'
                  }`}
                  onClick={() => handleOptionSelected(opt)}
                >
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      name="quiz-category"
                      type="radio"
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                      checked={selectedOption === opt}
                      value={opt}
                    />
                    <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                  </label>
                  <div className="">{opt}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-10 flex gap-5">
          <button
            className="bg-primary text-white rounded px-8 py-2 cursor-pointer"
            onClick={handleNextQuestion}
          >
            Next
          </button>
          <button
            className="border-primary border text-primary rounded px-8 py-2 cursor-pointer"
            onClick={handleNextQuestion}
          >
            Skip this Question
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizCard
