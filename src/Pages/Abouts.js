import React from 'react'
import { useNavigate } from 'react-router'

function Abouts() {

    const navigate = useNavigate();
  return (
    <div>
        <h1>about</h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repudiandae quasi cupiditate pariatur excepturi voluptatibus corrupti alias optio tempore earum inventore consectetur quod tempora labore consequatur fugit non libero eius.</p>
        <button onClick={() => {navigate("/")}}>Go to the Home</button>
    </div>
  )
}

export default Abouts