import React from 'react'
import Card from '../components/Card'
import Intro from '../components/Intro'
import Prep from '../components/Prep'
import Ingredients from '../components/Ingredients'
import Instruction from '../components/Instruction'
import Nutrition from '../components/Nutrition'


import './Homes.css'
const Home = () => {
  return (
    <>
    <Card>
          <img src='https://fidaweb.github.io/recipe-multipage-react/assets/images/image-omelette.jpeg' alt='img' style={{'width':'100%'}}/>
          <div className='mobile-card'>
  
          <Intro/>   
          <Prep/>  
          <Ingredients/>  
          <Instruction/>
          <Nutrition/>

          </div>
        </Card>
    </>
  )
}

export default Home
