import React from 'react'
import './Instruction.css'
const Instruction = () => {
  return (
    <>
    <div className='instructions'>
            <div className='instructions-title'>Instructions</div>
            <ul className='instruction-list'>
              <li className='instruction-point'><span>1.</span><div className='instruction-dot'><p><span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.</p></div></li>
              <li className='instruction-point'><span>2.</span><div className='instruction-dot'><p><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</p></div></li>
              <li className='instruction-point'><span>3.</span><div className='instruction-dot'><p><span>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.</p></div></li>
              <li className='instruction-point'><span>4.</span><div className='instruction-dot'><p><span>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.</p></div></li>
              <li className='instruction-point'><span>5.</span><div className='instruction-dot'><p><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.</p></div></li>
              <li className='instruction-point'><span>6.</span><div className='instruction-dot'><p><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</p></div></li>
            </ul>
          </div>
    </>
  )
}

export default Instruction