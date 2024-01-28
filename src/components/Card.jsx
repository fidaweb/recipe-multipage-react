import React from 'react'
import styles from './Card.css'






const Card = ({children}) => {

    


  return (
    <div
        className='Card'
        style={styles.Card}
    >
        {children}
    </div>
    
  )

  
}

export default Card


