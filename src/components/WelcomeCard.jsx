import appLogo from '../assets/appLogo.svg'
import QuizRules from './QuizRules'
import { useState } from 'react'

const WelcomePage = () => {
  const [showQuizRules, setShowQuizRules] = useState(false)

  const closeQuizRules = () => {
    setShowQuizRules(false)
  }

  const openQuizRulesDialog = (e) => {
    e.preventDefault()
    setShowQuizRules(true)
  }
  return (
    <div className="pt-10 mx-auto max-w-2xl">
      <div className="flex justify-center text-center text-6xl mb-8">
        Welcome to
        <img
          className="ml-4 h-14"
          src={appLogo}
          alt="QuizMania"
        />
      </div>
      <div className="mx-auto w-2xl bg-accent rounded px-4 py-4 mb-8">
        Please read all the rules about this quiz before you start.
        <a
          href="#"
          onClick={(e) => openQuizRulesDialog(e)}
          className="text-primary"
        >
          Quiz rules
        </a>
      </div>

      <form
        className="flex flex-col items-start"
        action=""
      >
        <div className="w-full mb-8">
          <div className="text-xl mb-2">Full name</div>
          <input
            className="border rounded p-4 border-gray-300 w-full"
            type="text"
            placeholder="Full name"
            name="full-name"
          />
        </div>

        <div className="w-full mb-4">
          <div className="mb-2">Please select topic to continue</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 flex items-center gap-4 border rounded border-gray-300">
              <label className="relative flex items-center cursor-pointer">
                <input
                  name="quiz-category"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                />
                <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <div className="">Javascript Basics</div>
            </div>
            <div className="p-4 flex items-center gap-4 border rounded border-gray-300">
              <label className="relative flex items-center cursor-pointer">
                <input
                  name="quiz-category"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                />
                <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <div className="">Vue Basics</div>
            </div>
            <div className="p-4 flex items-center gap-4 border rounded border-gray-300">
              <label className="relative flex items-center cursor-pointer">
                <input
                  name="quiz-category"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                />
                <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <div className="">React.js Advance</div>
            </div>
            <div className="p-4 flex items-center gap-4 border rounded border-gray-300">
              <label className="relative flex items-center cursor-pointer">
                <input
                  name="quiz-category"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-primary transition-all"
                />
                <span className="absolute bg-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <div className="">TailwindCSS Basics</div>
            </div>
          </div>
        </div>

        <button
          className="bg-primary font-semibold rounded px-8 py-2 text-white"
          type="submit"
        >
          Start Quiz
        </button>
      </form>
      <QuizRules
        showQuizRules={showQuizRules}
        closeQuizRules={closeQuizRules}
      />
    </div>
  )
}

export default WelcomePage
