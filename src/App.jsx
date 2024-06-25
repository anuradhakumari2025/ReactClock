// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from "./components/ClockHeading"
import ClockSlogan from './components/ClockSlogan'
import PresentTime from './components/PresentTime'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // const [count, setCount] = useState(0)

  return (<div>
   <ClockHeading></ClockHeading>
   <ClockSlogan></ClockSlogan>
   <PresentTime></PresentTime>
   
   </div>
  )
}

export default App
