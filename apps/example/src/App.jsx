import React, { useEffect } from 'react'

import {
  MdOutlineBrightness5,
  MdOutlineBrightness4,
  MdAdd,
  MdQuestionMark,
  MdOutlineSettings,
  MdClose,
  MdInfoOutline,
} from 'react-icons/md'

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
        <div className="flex flex-row gap-2 items-start">
          <div className="flex-1 flex flex-col gap-2 p-2">
            <div>
              <input className="switch" type="checkbox" />
            </div>
            <div>
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="flex flex-row gap-1">
              <button className="button">Cancel</button>
              <button className="button button-bordered">Cancel</button>
            </div>
            <div className="flex flex-row gap-1">
              <button className="button button-primary">Primary</button>
              <button className="button button-secondary">Secondary</button>
              <button className="button button-accent">Accent</button>
              <button className="button button-info">Info</button>
              <button className="button button-success">Success</button>
              <button className="button button-warning">Warning</button>
              <button className="button button-error">Error</button>
            </div>
            <div className="flex flex-row gap-1">
              <button className="button button-bordered button-primary">
                Primary
              </button>
              <button className="button button-bordered button-secondary">
                Secondary
              </button>
              <button className="button button-bordered button-accent">
                Accent
              </button>
              <button className="button button-bordered button-info">
                Info
              </button>
              <button className="button button-bordered button-success">
                Success
              </button>
              <button className="button button-bordered button-warning">
                Warning
              </button>
              <button className="button button-bordered button-error">
                Error
              </button>
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
              <input
                type="text"
                className="input input-info"
                placeholder="Info example"
              />
            </div>
            <div>
              <input
                type="text"
                className="input input-success"
                placeholder="Success example"
              />
            </div>
            <div>
              <input
                type="text"
                className="input input-warning"
                placeholder="Warning example"
              />
            </div>
            <div>
              <input
                type="text"
                className="input input-error"
                placeholder="Error example"
              />
            </div>
            <div>
              <div className="relative">
                <MdQuestionMark className="absolute top-1/2 -translate-y-2/4 left-1" />
                <input
                  type="text"
                  className="input pl-5"
                  placeholder="Left Icon Example"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <MdQuestionMark className="absolute top-1/2 -translate-y-2/4 right-1" />
                <input
                  type="text"
                  className="input pr-5"
                  placeholder="Right Icon Example"
                />
              </div>
            </div>
            <div>
              <textarea className="input" rows="5"></textarea>
            </div>
          </div>

          <div className="flex-1 card">
            <div className="p-2 border-b border-base-content border-opacity-20 text-sm flex flex-row gap-2 items-center">
              <MdOutlineSettings />
              <div className="flex-1">Form control</div>

              <button>
                <MdClose />
              </button>
            </div>
            <div className="px-4 py-2 text-xs">
              <div className="flex flex-row gap-2 bg-base-300 p-2 rounded">
                <MdInfoOutline className="inline-block text-xl" />
                <p>
                  You are about to close this collection with unsaved changes.
                  Would you like to save these changes before closing?
                </p>
              </div>
            </div>
            <div className="p-2 border-t border-base-content border-opacity-20 text-sm flex flex-row gap-2 items-center justify-end">
              <button className="button">Close</button>
              <button className="button button-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
