import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityToggle = (quantity, setIncrease, setDecrease) => {
  return (
    <div className='quantitytoggle'>
      <div className="quantity">
        <button onClick= {() => setDecrease()}></button>
        <RemoveIcon/>
        <div className="num">{quantity}</div>
        <button onClick= {() => setIncrease()}></button>
        <AddIcon/>
      </div>
    </div>
  )
}

export default QuantityToggle
