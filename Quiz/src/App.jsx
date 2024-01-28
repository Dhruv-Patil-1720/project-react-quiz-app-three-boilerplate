import HomeComponent from './Components/HomeComponent'
import QuizComponent from './Components/QuizComponent'
import ResultComponent from './Components/ResultComponent'
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
        <Routes>
      <Route exact path="/" element={<HomeComponent/>}/>
      <Route path="/quiz" element={ <QuizComponent/>}/>
      <Route path="/result" element={<ResultComponent/>}/>
      {/* <Route path="*" element={ <NoMatch />}/> */}
    </Routes>
    </>
  )
}

export default App
