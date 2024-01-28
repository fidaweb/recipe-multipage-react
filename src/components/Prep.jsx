import React from 'react'
import './Prep.css'
const Prep = () => {
  return (
    <>
        <div className='prep'>
            <div className='prep-title'>Preparation time</div>
            <ul className='prep-list'>
              <li><div className='dot'/><div className='prep-dot'><span>Total</span><p>:Approximately 10 minutes</p></div></li>
              <li><div className='dot'/><div className='prep-dot'><span>Preparation</span><p>: 5 minutes</p></div></li>
              <li><div className='dot'/><div className='prep-dot'><span>Cooking</span><p>: 5 minutes</p></div></li>
            </ul>
          </div>
    </>
  )
}

export default Prep