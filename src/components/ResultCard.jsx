import { FaCircleCheck, FaFaceSadTear } from 'react-icons/fa6'

const ResultCard = ({ results, onRetakeQuiz }) => {
  const { correct, incorrect, totalQuestions, unanswered } = results

  const totalScore = (correct / totalQuestions) * 100

  return (
    <div className="flex font-secondary flex-col items-center justify-center mt-10">
      <div className="">
        {totalScore > 50 ? (
          <div className="flex flex-col items-center justify-center">
            <FaCircleCheck className="text-green-700 text-7xl mb-5" />
            <div className="uppercase text-6xl font-extralight">
              Congratulations
            </div>
            <div className="mb-4 text-xl">
              You successfully completed the Quiz and holds
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="text-4xl font-extralight">Your score</div>
              <div className="text-5xl font-bold text-green-500">{`${totalScore}%`}</div>
              <div className="text-4xl font-extrabold">Great Job!</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <FaFaceSadTear className="text-red-700 text-7xl mb-5" />
            <div className="mb-4 text-xl">
              You successfully completed the Quiz but you need to
            </div>
            <div className="text-center uppercase text-6xl font-extralight">
              Keep <br /> practicing!
            </div>
            <div className="mt-10 h-50 w-50 border border-primary rounded-full flex flex-col items-center justify-center">
              <div className="">Your score</div>
              <div className="text-red-500">{`${totalScore}%`}</div>
            </div>
          </div>
        )}
      </div>

      <div className="my-5 flex flex-col  border rounded border-gray-300 p-4">
        <div className="text-xl text-center font-semibold">{`Out of  ${totalQuestions} Questions`}</div>
        <div className="flex gap-5">
          <div className="">
            <span className="text-green-500 font-bold">{correct}</span> Correct
          </div>
          <div className="">
            <span className="text-red-500 font-bold">{incorrect}</span>{' '}
            Incorrect
          </div>
          <div className="">
            <span className="text-gray-500 font-bold">{unanswered}</span>{' '}
            Unanswered
          </div>
        </div>
      </div>

      <div className="">
        <button
          className="border-primary border text-primary px-8 py-2 rounded cursor-pointer"
          onClick={onRetakeQuiz}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  )
}

export default ResultCard
