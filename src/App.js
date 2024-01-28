
import './App.css';
import Home from './scenes/Home.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NutritionPage from './scenes/NutritionPage.jsx';
import IngredientsPage from './scenes/IngredientsPage.jsx';

import InstructionPage from './scenes/InstructionPage.jsx';
import Navbar from './components/Navbar.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const themes=useSelector(state=>state.themes)
  const [theme,setTheme]=useState(themes)
  let myBody=document.getElementById('myBody')
  let logo=document.getElementById('logo')
  console.log(theme)
  if(theme===false){
    
    myBody.style.backgroundColor='black'
    logo.setAttribute('src','%PUBLIC_URL%/assets/images/dark.svg')
  }
  else{
    myBody.style.backgroundColor='hsl(30, 54%, 90%)'
    logo.setAttribute('src','%PUBLIC_URL%/assets/images/light.svg')
  }
useEffect(()=>{
  setTheme(themes)
},[themes])

  return (
    <div className="App">
        <Router>
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/NutritionPage'>Nutrition</Link>
                <Link to='/Ingredients'>Ingredients</Link>
                <Link to='/Instruction'>Instruction</Link>
            </nav> */}
            
            <Navbar/>
            <Routes>              
               <Route path='/' element={<Home/>}/>
               <Route path='/NutritionPage' element={<NutritionPage/>}/>
               <Route path='/Ingredients' element={<IngredientsPage/>}/>
               <Route path='/Instruction' element={<InstructionPage/>}/>
            </Routes>
            
        </Router>
             
    </div>
  );
}

export default App;
