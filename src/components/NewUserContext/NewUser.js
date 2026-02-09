import React, { useState } from 'react'
import UseUserContext from '../UsersContexts/UseUserContext';

function NewUser() {

  const { state, dispatch} = UseUserContext();

  const [addData, setAddData] = useState('');


  const handleChange = (e) => {
    setAddData(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id: new Date().getTime().toString(), name: addData }
    setAddData((prevData) => {
      return [...prevData, newData]
    })
    dispatch({ type: "ADD DATA", payload: newData })
    setAddData("");

  }

  return (
    <div>
      <h1>Fake Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='addData' onChange={handleChange} value={addData} required placeholder='Enter The Data' />
        <button>add Data</button>
      </form>
    </div>
  )
}

export default NewUser