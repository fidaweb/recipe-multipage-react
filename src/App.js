
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
    logo.setAttribute('src','assets/images/dark.svg')
  }
  else{
    myBody.style.backgroundColor='hsl(30, 54%, 90%)'
    logo.setAttribute('src','assets/images/light.svg')
  }
useEffect(()=>{
  setTheme(themes)
},[themes])

  return (
    <div className="App">
        <Router>
          
            
            <Navbar/>
            <Routes>              
               <Route path='/recipe-multipage-react' element={<Home/>}/>
               <Route path='/recipe-multipage-react/NutritionPage' element={<NutritionPage/>}/>
               <Route path='/recipe-multipage-react/Ingredients' element={<IngredientsPage/>}/>
               <Route path='/recipe-multipage-react/Instruction' element={<InstructionPage/>}/>
            </Routes>
            
        </Router>
             
    </div>
  );
}

export default App;
