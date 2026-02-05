import React from 'react'
import './Desh.css'
import NewData from './NewData'

function Desh(props) {

  return (

    <section className='countries'>
      {props.posts.map((posts) => {
        return (
          <NewData key={posts.id} posts={posts} onRemovehandle={props.onRemovehandle} />
        )
      })}
    </section>
  )
}

export default Desh