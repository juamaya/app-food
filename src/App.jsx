
import Meal from './componentes/Meal'
import RecipeInfo from './componentes/RecipeInfo'
import Footer from './componentes/Footer'

import './componentes/styles.css'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
     <Footer/>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/food' element={<Meal/>} />
        <Route path='/food/:MealId' element={<RecipeInfo/>} />
        <Route path='*' element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  )
}

export default App
