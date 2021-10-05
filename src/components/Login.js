
import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../features/user'
function Login() {
  const [formData,setFormData] = React.useState({
    name:'',
    age:0, 
    email:''
  })
  const handleInput =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  console.log(formData)
  const dispatch = useDispatch()
  return (
    <>
      <input type='text' placeholder='Name'name="name" onChange={handleInput}/>
      <input type='text' placeholder='Age'name='age' onChange={handleInput}/>
      <input type='text' placeholder='Email' name='mail' onChange={handleInput}/>
      <button onClick={()=>dispatch(login(formData))}>Login</button>
      <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </>
  )
}

export default Login

