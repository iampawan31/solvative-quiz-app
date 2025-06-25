import appLogo from '../assets/appLogo.svg'

const AppHeader = () => {
  return (
    <div className="flex px-2 py-5 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="">
          <img
            src={appLogo}
            alt="Quiz Mania"
          />
        </div>
      </div>
    </div>
  )
}

export default AppHeader
