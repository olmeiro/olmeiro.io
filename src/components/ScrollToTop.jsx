import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-black dark:hover:bg-slate-600"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTop
