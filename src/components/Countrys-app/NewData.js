import React from 'react'
import './NewData.css';

function NewData(props) {

  const {title, body} = props.posts;

  const handleClick = () => {
    props.onRemovehandle(title);
  }
   

  return (
    <article className='country'>
      <div>
        <h3>{title}</h3>
        <h5>{body}</h5>
      </div><br />
      <div>
        <button className='btn' onClick={() => {
          handleClick(title)
        }}>Remove Data</button>
      </div>
    </article>
  )
}

export default NewData