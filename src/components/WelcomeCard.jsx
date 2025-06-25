import { useState } from 'react'
import { toast } from 'react-toastify'
import appLogo from '../assets/appLogo.svg'
import { categories } from '../data/categories'
import QuizRules from './QuizRules'

const WelcomePage = ({
  fullName,
  selectedCategory,
  onCategorySelected,
  onFullNameSelected,
  onStartQuiz
}) => {
  const [showQuizRules, setShowQuizRules] = useState(false)

  const closeQuizRules = () => {
    setShowQuizRules(false)
  }

  const handleStartQuiz = () => {
    if (!fullName) {
      toast.error('Please enter your name')
      return
    }

    onStartQuiz()
  }

  const openQuizRulesDialog = (e) => {
    e.preventDefault()
    setShowQuizRules(true)
  }
  return (
    <div className="pt-10 mx-auto max-w-2xl">
      <div className="flex items-center justify-center text-center text-3xl md:text-6xl mb-8">
        <div className="">Welcome to</div>
        <img
          className="ml-2 h-5 md:h-14"
          src={appLogo}
          alt="QuizMania"
        />
      </div>
      <div className="mx-auto w-sm sm:w-md md:w-2xl bg-accent rounded px-4 py-4 mb-8">
        Please read all the rules about this quiz before you start.
        <a
          href="#"
          onClick={(e) => openQuizRulesDialog(e)}
          className="text-primary"
        >
          Quiz rules
        </a>
      </div>

      <div className="px-4 md:px-0 flex flex-col items-start">
        <div className="w-full mb-8">
          <div className="text-xl mb-2">Full name</div>
          <input
            className="border rounded p-4 border-gray-300 w-full"
            type="text"
            placeholder="Full name"
            name="full-name"
            value={fullName}
            onChange={(e) => onFullNameSelected(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <div className="mb-2">Please select topic to continue</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories &&
              categories.map((category, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center cursor-pointer gap-4 border rounded border-gray-300 ${
                    selectedCategory === category.value
                      ? 'border-primary'
                      : 'border-gray-300'
                  }`}
                  onClick={() => onCategorySelected(category.value)}
                >
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      name="quiz-category"
                      type="radio"
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                      checked={selectedCategory === category.value}
                      value={category.value}
                    />
                    <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                  </label>
                  <div className="">{category.label}</div>
                </div>
              ))}
          </div>
        </div>

        <button
          className="bg-primary cursor-pointer font-semibold rounded px-8 py-2 text-white"
          type="submit"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </button>
      </div>

      {/* Quiz Rules Modal */}
      <QuizRules
        showQuizRules={showQuizRules}
        closeQuizRules={closeQuizRules}
      />
    </div>
  )
}

export default WelcomePage
