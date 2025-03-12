import React from 'react'
import style from './Home.module.css'

export default function Home() {
  
  return <>
  <div className="Home">
    <h2>Home</h2>
    <div>
  <div className="div1-sef">
    <div className="overlay">
      <div className="parent">
      </div> {/*div1-sef*/}
    </div> {/*overlay*/}
  </div>{/*parent*/}
  {/* ///////////////////// */}
  <div className="div1-h">
    <div className="overlay">
      <div className="parent">
        <h2 className="title1-Hero">Because every plant tells a story, care for it smartly!</h2>
        <p className="P1-Hero">Give your plants the best care with smart technology</p>
        <br />
        <button className=" btn btn1-Hero">Log in</button>
        <button className=" btn btn1-Hero">Sign up</button>
        <button className="btn btn1-Hero btn2-hero">learn more!</button>
      </div>   {/* /parent */}
    </div>  {/* /overlay */}
  </div>   {/* /Hero */}
</div>
</div>

  
  </>
}
