import React from 'react'

function Inline() {
    //It is the Inline styling in react;
    // in react we use camelcase letters css properties names eg= fontsize(css) -> fontSize(react)
    // in react style attribute accept only the object.
    const heading = {
        fontSize: '100px',
        color: 'blue',
        fontStyle : "calibre"
    }
  return (
    <div>
      <p style={heading}>It is the Inline CSS style in react</p>
    </div>
  )
}
export default  Inline
