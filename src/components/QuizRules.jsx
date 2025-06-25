import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'

const QuizRules = ({ showQuizRules, closeQuizRules }) => {
  return (
    <Dialog
      open={showQuizRules}
      onClose={() => closeQuizRules}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl shadow p-10 w-4xl">
          <DialogTitle>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold">Quiz Rules</div>
              <div
                className="bg-gray-300 cursor-pointer text-black h-8 w-8 p-2 flex items-center justify-center rounded-full"
                onClick={closeQuizRules}
              >
                X
              </div>
            </div>
          </DialogTitle>
          <Description>
            <div className="flex flex-col gap-5">
              <div className="mt-10">
                <div className="bg-alternate px-4 py-2 text-xl font-bold mb-4">
                  10-Second Timer
                </div>
                <div className="">
                  <ul className="list-disc list-inside">
                    <li>Each question comes with a 10-second timer.</li>
                    <li>
                      If you don’t answer within the time limit, the app will
                      automatically move to the next question.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="bg-alternate px-4 py-2 text-xl font-bold mb-4">
                  Manual Navigation
                </div>
                <div className="">
                  <ul className="list-disc list-inside">
                    <li>
                      You can navigate to the next question manually before the
                      timer expires.
                    </li>
                    <li>
                      Use the "Next" button to move ahead if you’re ready before
                      the timer runs out.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="bg-alternate px-4 py-2 text-xl font-bold mb-4">
                  Final Score and Performance Message
                </div>
                <div className="">
                  <ul className="list-disc list-inside">
                    <li>
                      After all questions are answered, your final score will be
                      displayed.
                    </li>
                    <li>
                      Based on your performance, you will receive a personalized
                      message:
                      <ul className="ml-5 list-disc list-inside">
                        <li>
                          Great job!: If you score <b>above 80%.</b>
                        </li>
                        <li>
                          Well done!: If you score <b>between 60% and 80%.</b>
                        </li>
                        <li>
                          Keep practicing!: If you score <b>below 60%.</b>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Description>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default QuizRules
