import { useEffect, useState } from 'react'

function Dark () {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.documentElement.classList.remove(colorTheme)
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', `${theme}`)
  }, [theme, colorTheme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="h-1/2  bg-slate-400 text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? '☀️' : '🌛'}
      </button>
    </div>
  )
}

export default Dark
