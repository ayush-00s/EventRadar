import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import TabsNavigation from './Components/TabsNavigation'
import SignUp from './Components/SignUp'
import { useState } from 'react'
import LogIn from './Components/LogIn'




const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
    return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TabsNavigation 
      onSignUpClick={() => setShowSignUp(true)} onLogInClick={()=> setShowLogIn(true)}
      />
      <Routes>
        <Route path="/" element={<LandingPage onSignUpClick={() => setShowSignUp(true)}
        onLogInClick={() => setShowLogIn(true)}
         />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      {showSignUp && <SignUp 
                        onClose={() => setShowSignUp(false)} 
                        onLogInClick={() => setShowLogIn(true)}
                      />}
      {showLogIn && <LogIn 
                      onClose={() => setShowLogIn(false)}
                      onSignUpClick={() => setShowSignUp(true)} // this will set signup modal true 
                    />}
    </div>
  )
}

export default App
