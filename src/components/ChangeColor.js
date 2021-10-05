import React from 'react'
import {useDispatch} from 'react-redux'
import {changeColor} from '../features/theme'
function ChangeColor() {
  const [color,setColor] =React.useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <input type='text' placeholder='color' onChange={(e)=>setColor(e.target.value)}/>
      <button onClick={()=>{dispatch(changeColor(color))}}>Change Color</button>
    </div>
  )
}

export default ChangeColor
