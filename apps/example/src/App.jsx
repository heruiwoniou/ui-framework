import React, { useEffect } from 'react'

function App() {
  const [mode, setMode] = React.useState(
    matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-64 bg-base-300">
        <h1 className="h-14 bg-base-200 flex items-center justify-center">
          header & icon
        </h1>
        <nav className="flex-1 min-h-0">
          <ul>
            <li>dashboard</li>
            <li>alerts</li>
            <li>settings</li>
          </ul>
        </nav>
        <div className="h-14 bg-base-200">
          <input
            type="checkbox"
            checked={mode === 'dark'}
            onChange={e => setMode(e.target.checked ? 'dark' : 'light')}
          />
        </div>
      </div>
    </div>
  )
}

export default App
