import React, { useState } from 'react'

export default function Header() {
  const [dark , setDark]= useState(!false);
  const ChangeMode= ()=>{
    const root = document.querySelector(":root");
    if (dark) {
      root.style.setProperty("--cardBg", "hsl(228, 28%, 20%)");
      root.style.setProperty("--topBg", "hsl(232, 19%, 15%)");
      root.style.setProperty("--text-color", "hsl(228, 34%, 66%)");
      root.style.setProperty("--mainHeading--color", "hsl(0, 0%, 100%)");
      root.style.setProperty("--Bg", "hsl(230, 17%, 14%)");
    } else {
      root.style.setProperty("--topBg", "hsl(225, 100%, 98%)");
      root.style.setProperty("--text-color", "hsl(228, 12%, 44%)");
      root.style.setProperty("--mainHeading--color", "hsl(230, 17%, 14%)");
      root.style.setProperty("--cardBg", "hsl(227, 47%, 96%)");
      root.style.setProperty("--Bg", "hsl(0, 0%, 100%)");
    }
    setDark(!dark);

  }
  return (
    <header>
        <div className="right">
          <h1 className="heading">Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="left rowIcon">
          <div className="darkMode">Dark Mode</div>
          <div className="">
            <label className="switch">
              <input onChange={ChangeMode} type="checkbox" className="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
  )
}
