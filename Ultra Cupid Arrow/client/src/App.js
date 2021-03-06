import Home from './pages/Home'
import OnBoarding from './pages/OnBoarding'
import Dashboard from './pages/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import{useCookies} from "react-cookie"
const App = ()=>{
    const [cookies,setCookie,removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    console.log(authToken)

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {<Route path="/dashboard" element={<Dashboard/>}/>}
          {<Route path="/onboarding" element={<OnBoarding/>}/>}
      </Routes>
    </BrowserRouter>

  );
}

export default App
