import React from 'react'
import './Nutrition.css'


const Nutrition = () => {
  return (
    <>
    <div className='nutrition'>
            <div className='nutrition-intro'>
              <div className='nutrition-title'>Nutrition</div>
              <p className='nutrition-description'>The table below shows nutritional values per serving without the additional fillings.</p>
            </div>
            <div className='table'>
              <div className='nutrients'><span className='tag'>Calories</span><span className='value'>277kcal</span></div>
              <div className='nutrients'><span className='tag'>Carbs</span><span className='value'>0g</span></div>
              <div className='nutrients'><span className='tag'>Protein</span><span className='value'>20g</span></div>
              <div className='nutrients'><span className='tag'>Fat</span><span className='value'>22g</span></div>
            </div>
          </div>
    </>
  )
}

export default Nutrition