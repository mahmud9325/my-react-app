import React from 'react'
import './User.css';
import UseUserContext from '../UsersContexts/UseUserContext';

function User({user}) {

  const {state, dispatch} = UseUserContext();

  const { id, name } = user;

  const handleClick = (id) => {
    dispatch({type: 'REMOVE DATA', payload: id})
  }


  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{name}</p>
      <button className='delete' onClick={() => { handleClick(id) }}>Delete</button>
    </article>
  )
}

export default User