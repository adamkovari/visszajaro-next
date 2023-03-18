import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      if(window.pageYOffset > scrollPosition)
      {
        //console.log(window.pageYOffset)
        setScrollPosition(window.pageYOffset)
      }
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [scrollPosition])

  return scrollPosition
}