import React from 'react'
import './Ingredients.css'
const Ingredients = () => {
  return (
    <>
    <div className='ingredients'>
            <div className='ingredients-title'>Ingredients</div>
            <ul className='ingredients-list'>
              <li><div className='dot'/><div className='ing-dot'>2-3 large eggs</div></li>
              <li><div className='dot'/><div className='ing-dot'>Salt, to taste</div></li>
              <li><div className='dot'/><div className='ing-dot'>Pepper, to taste</div></li>
              <li><div className='dot'/><div className='ing-dot'>1 tablespoon of butter or oil</div></li>
              <li><div className='dot'/><div className='ing-dot'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</div></li>
            </ul>
          </div>
    </>
  )
}

export default Ingredients