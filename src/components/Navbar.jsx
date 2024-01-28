import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import './Navbar.css'
import  { toggleTheme } from '../state/slices/themeSlice'

const Navbar = () => {

  const themes=useSelector(state=>state.themes)
  const [theme,setTheme]=useState(themes)
  const dispatch=useDispatch()
  // console.log(theme)
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
                
                <img id='theme' onClick={()=>{changeTheme()}} className='theme' src='./assets/images/light.svg' alt=''/>
                
                
    </div>
  )
}

export default Navbar