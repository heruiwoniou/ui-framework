import React from 'react'

import tw from 'twin.macro'

function App() {
  return (
    <div className="h-full">
      <div className="flex w-full h-full">
        <div>
          <h1>header & icon</h1>
          <nav>
            <ul>
              <li>dashboard</li>
              <li>alerts</li>
              <li>settings</li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App
