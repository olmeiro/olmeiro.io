import { useEffect, useState } from 'react'

function Dark () {
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
        className=" bg-indigo-500 text-lg p-1 rounded-md"
      >
        { theme === 'dark' ? '☀️' : '🌛'}
      </button>
    </>
  )
}

export default Dark
