import appLogo from '../assets/appLogo.svg'

const AppHeader = ({ currentStep, fullName, onExitQuiz }) => {
  return (
    <div className="flex px-2 py-5 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img
            src={appLogo}
            alt="Quiz Mania"
          />

          <div className="">
            {currentStep === 'take-quiz' && (
              <button
                className="border border-primary rounded px-8 py-2 text-primary"
                onClick={onExitQuiz}
              >
                Exit Quiz
              </button>
            )}

            {currentStep === 'result' && (
              <div className="flex items-center gap-2">
                <div className="flex bg-black text-white justify-center items-center rounded-full w-10 h-10">
                  {fullName[0]}
                </div>
                {fullName}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
