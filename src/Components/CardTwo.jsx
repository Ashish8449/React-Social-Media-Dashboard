import React from 'react'


export default function CardTwo(props) {
   const {title,count,percent, svg }=props;


  return (
   
    <div className="scol scol1" data-aos="zoom-in-right">
          <div className="title">{title}</div>
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
             {svg}
            </svg>
          
          </div>
          <div className="count">{count}</div>
          <div className="percent">
            <p className={props.percent>=0? "up":"down"} >
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                <path fill="" {} fillRule="evenodd" d="M0 4l4-4 4 4z" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                <path fill={props.percent>=0? "#1EB589":"#DC414C "} fillRule="evenodd" d= {props.percent<0?  "M0 0l4 4 4-4z" :"M0 4l4-4 4 4z"}/>
              </svg>
             
              {Math.abs( percent )+"%"} 
            </p>
          </div>
        </div>
  )
}
