import { useEffect, useState } from 'react'

function App () {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button
        type='button'
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-8 bg-indigo-500 text-lg p-1 rounded-md"
      >
        { theme === 'dark' ? '🌑' : '☀️'}
      </button>
      <div className='bg-red dark:bg-slate-900'>
          <h1 className='dark:text-white'>Olmeiro portfolio</h1>
      </div>
    </>
  )
}

export default App
