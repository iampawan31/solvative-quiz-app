import { FaCircleCheck, FaFaceSadTear } from 'react-icons/fa6'
import { isPositiveResult } from '../utils/helpers'

const ResultCard = ({ score, results, onRetakeQuiz }) => {
  const { correct, incorrect, unanswered } = results

  const totalScore = correct + unanswered + (score - correct)

  return (
    <div className="">
      <div className="">
        {isPositiveResult(correct, totalScore) ? (
          <div className="">
            <FaCircleCheck />
          </div>
        ) : (
          <div className="">
            <FaFaceSadTear />
          </div>
        )}
      </div>

      <div className="my-5 border rounded border-gray-300 p-2">
        <div className="">{`Out of  ${totalScore} Questions`}</div>
        <div className="">
          <div className="">
            <span className="text-green-500">{correct}</span> Correct
          </div>
          <div className="">
            <span className="text-red-500">{incorrect}</span> Incorrect
          </div>
          <div className="">
            <span className="text-gray-500">{unanswered}</span> Unanswered
          </div>
        </div>
      </div>

      <div className="">
        <button
          className="border-primary text-primary px-8 py-2 rounded"
          onClick={onRetakeQuiz}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  )
}

export default ResultCard
