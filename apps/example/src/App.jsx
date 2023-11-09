import React, { useEffect } from 'react'

import {
  MdOutlineBrightness5,
  MdOutlineBrightness4,
  MdAdd,
} from 'react-icons/md'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

function App() {
  const [mode, setMode] = React.useState(
    matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-64 border-r border-opacity-20 border-base-content">
        <h1 className="flex items-center justify-center border-b border-opacity-20 border-base-content">
          header & icon
        </h1>
        <nav className="flex-1 min-h-0 p-2">
          <ul>
            <li>dashboard</li>
            <li>alerts</li>
            <li>settings</li>
          </ul>
        </nav>
        <div className="flex justify-end items-center p-2 border-t border-opacity-20 border-base-content">
          <div onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
            {mode === 'dark' && <MdOutlineBrightness5 />}
            {mode !== 'dark' && <MdOutlineBrightness4 />}
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0 overflow-hidden overflow-y-auto p-2">
        <div className="flex flex-col gap-2 max-w-md bg-base-200 p-2 rounded">
          <div>
            <input className="switch" type="checkbox" />
          </div>
          <div>
            <input className="checkbox" type="checkbox" />
          </div>
          <div>
            <button className="button">Cancel</button>
          </div>
          <div>
            <button className="button button-primary">Create Collection</button>
          </div>
          <div>
            <button className="button button-primary">
              <MdAdd /> Add New Field
            </button>
          </div>
          <div>
            <button className="button button-primary button-block">
              <MdAdd /> Create New Action
            </button>
          </div>
          <div>
            <input type="text" className="input" />
          </div>
          <div>
            <input type="text" className="input" placeholder="E.g Blog Posts" />
          </div>
          <div>
            <div className="input-wrapper">
              <AiOutlineQuestionCircle className="input-icon-left" />
              <input type="text" className="input" placeholder="Left Icon" />
              <AiOutlineQuestionCircle className="input-icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
