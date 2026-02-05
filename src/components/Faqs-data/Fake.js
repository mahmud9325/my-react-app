import React, { useState } from 'react'
import './Faq.css'

function Fake(props) {

  const [toggle, setToggle] = useState(false);
  const {id, title, desc} = props.faq;
  return (
   

    <article className='faq'>
      <div>
        <h2>{title}</h2>
        <button className='button' onClick={() => {
          setToggle(!toggle)
        }}>
        {toggle ? '-' : "+"}
        </button>
       
      </div>
       { toggle && <p>{desc}</p>}
    </article>


  )
}

export default Fake