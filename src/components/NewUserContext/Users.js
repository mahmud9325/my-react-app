import React from 'react'
import User from './User'
import UseUserContext from '../UsersContexts/UseUserContext'

function Users() {

   const {state} = UseUserContext();

  return (
    <section className='users'>
      {state.userName.map(user => {
        return <User key={user.id} user={user} />
      })}
    </section>
  )
}

export default Users