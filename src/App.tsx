import Background from './components/Background'
import LoadingScreen from './components/LoadingScreen'
import Layout from './components/Layout'
import Socials from './components/Socials'

import './App.scss'

function App() {
  return (
    <div className="page">
      <LoadingScreen />
      <Background />
      <Layout />
      <Socials />
    </div>
  )
}

export default App
