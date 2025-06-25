import AppHeader from './components/AppHeader'
import WelcomePage from './components/WelcomeCard'

const App = () => {
  return (
    <div className="text-secondary bg-alternate min-h-screen h-full">
      {/* App Header */}
      <AppHeader />

      {/* App Content */}
      <div className="container mx-auto ">
        <WelcomePage />
      </div>
    </div>
  )
}

export default App
