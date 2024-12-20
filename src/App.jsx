
import { useState } from 'react';
import './App.css'

function App() {

  const[values,setvalues]=useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })
const handlechanges=(e)=>{
  setvalues({...values,[e.target.name]:[e.target.value]})

}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(values)
}
const ResetFun=()=>{
  setvalues({firstname:'',lastname:'',email:''})
}
  return (
<div className="container">
  <h1>form</h1>
  <form onSubmit={handleSubmit}> 
    <label htmlFor="firstname">firstname</label>
    <input type="text"placeholder='enter first name' name="firstname"
    onChange={(e) => handlechanges(e) }required value={values.firstname}/>
    
    <label htmlFor="lastname">lastname</label>
    <input type="text"placeholder='enter last name' name="lastname"
    onChange={(e) => handlechanges(e) }required value={values.lastname}/>
     

    <label htmlFor="email">email</label>
    <input type="email"placeholder='enter email' name="email"
    onChange={(e) => handlechanges(e) }required value={values.email}/>


    
    <label htmlFor="contact">contact</label>
    <input type="text"placeholder='enter phone number' name="contact"
    onChange={(e) => handlechanges(e) }required />


    
    <label htmlFor="gender">gender</label>
    <input type="radio" name="gender"
    onChange={(e) => handlechanges(e) }/>male 
    <input type="radio" name="gender"
    onChange={(e) => handlechanges(e) }/>female
    <input type="radio" name="gender"
    onChange={(e) => handlechanges(e) }/>other

    <label htmlFor="subject">subject</label>
    <select name="subject" id="subject"
    onChange={(e) => handlechanges(e) }>
      <option value="math">math</option>
      <option value="phy">phy</option>
      <option value="eng">eng</option>
  </select>

    <label htmlFor="resume">resume</label>
    <input type="file"placeholder='select resume' name="resume"
    onChange={(e) => handlechanges(e) }/>


    <label htmlFor="url">url</label>
    <input type="text"placeholder='enter image url' name="url"
    onChange={(e) => handlechanges(e) }/>


    
    <label htmlFor="about">about</label>
    <textarea name='about' id='about'cols="30"rows="10"
    onChange={(e) => handlechanges(e) }
    placeholder='enter description'></textarea>

    <button type='button'onClick={ResetFun}>reset</button>
    <button type='submit'>submit</button>

</form>
</div>

    
  )
}

export default App;
