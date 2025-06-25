import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import AppHeader from './components/AppHeader'
import QuizCard from './components/QuizCard'
import ResultCard from './components/ResultCard'
import WelcomeCard from './components/WelcomeCard'

const App = () => {
  const [fullName, setFullName] = useState('')
  // Steps are 'category', 'take-quiz' & 'result'
  const [currentStep, setCurrentStep] = useState('category')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [score, setScore] = useState(0)
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    unanswered: 0
  })

  const handleCategorySelected = (category) => {
    setSelectedCategory(category)
  }

  const handleQuizCompleted = (finalResults) => {
    setScore(finalResults.correct)
    setResults(finalResults)
    setCurrentStep('result')
  }

  const handleRetakeQuiz = () => {
    setCurrentStep('category')
    setSelectedCategory('')
    setScore(0)
    setResults({
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      totalQuestions: 0
    })
  }

  const handleStartQuiz = () => {
    if (!selectedCategory) {
      toast.error('Please select a category before starting the quiz')
      return
    }
    setCurrentStep('take-quiz')
  }

  return (
    <div className="text-secondary bg-alternate min-h-screen h-full">
      {/* App Header */}
      <AppHeader
        fullName={fullName}
        currentStep={currentStep}
        onExitQuiz={handleRetakeQuiz}
      />

      {/* App Content */}
      <div className="container mx-auto ">
        {/* Category selection step */}
        {currentStep === 'category' && (
          <WelcomeCard
            fullName={fullName}
            selectedCategory={selectedCategory}
            onCategorySelected={handleCategorySelected}
            onFullNameSelected={(e) => setFullName(e)}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {/* Answer quiz questions step */}
        {currentStep === 'take-quiz' && selectedCategory && (
          <QuizCard
            selectedCategory={selectedCategory}
            onQuizCompleted={handleQuizCompleted}
          />
        )}

        {/* Results step */}
        {currentStep === 'result' && (
          <ResultCard
            score={score}
            results={results}
            onRetakeQuiz={handleRetakeQuiz}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
