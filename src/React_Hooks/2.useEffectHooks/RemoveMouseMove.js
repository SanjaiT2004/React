import React, { useState } from 'react'
import MouseMove from './MouseMove';

function RemoveMouseMove() {
    const [display, setDisplay] = useState(true);
  return (
      <div>
          <button onClick={() => setDisplay(!display)}>Toggle or remove the component</button>
          {display && <MouseMove />}
          {/* if we want to remove the mouse move component just set the display as false
          but the eventlistener is still working so we are using the remove or unmount the event by return the event
          */}
    </div>
  )
}

export default RemoveMouseMove