import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import './Navbar.css'
import  { toggleTheme } from '../state/slices/themeSlice'

const Navbar = () => {

  const themes=useSelector(state=>state.themes)
 
  const dispatch=useDispatch()
 
  const changeTheme=()=>{

    dispatch(toggleTheme({themes}))
  }
  return (
    <div className='Navbar'>
                <div className='links'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/NutritionPage'>Nutrition</Link>
                <Link className='link' to='/Ingredients'>Ingredients</Link>
                <Link className='link' to='/Instruction'>Instruction</Link>    
                </div>
                
                <img id='logo' onClick={()=>{changeTheme()}} className='theme' src='https://fidaweb.github.io/recipe-multipage-react/assets/images/dark.svg' alt='img'/>
               
                
    </div>
  )
}

export default Navbar