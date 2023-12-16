import React from 'react'
import './10.myStyling.css'// this import might not be present here it wont affect if you imported in render page
// module css must be imported in local component then only it will be applied 
export default function Styling(props) {
    let classname = props.cancolor ? 'colored' : ''// by using prop we can control the styles

    return (
            //It is outline styling in react 
        <div>
            <h1 className='colored'> Colored by Sanjai </h1>
            {/* directly applied the class*/}
            <h1 className={classname}> Colored by Sanjai </h1>
            {/* props controls the style*/}
            <h1 className={`${classname} fontstyle`}> Colored by Sanjai </h1>
            {/* using multiple colors using the ticks (``)*/}
            <h1 className={`${classname} fontstyle`}> Colored by Sanjai </h1>
    </div>
  )
}//
