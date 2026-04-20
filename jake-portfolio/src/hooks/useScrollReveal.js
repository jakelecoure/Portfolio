import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the CSS class "visible"
 * is added — works with the .reveal / .reveal.visible rules in index.css.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold: 0.1, ...options }
    )

    // Observe the root element and all .reveal children
    const targets = el.querySelectorAll('.reveal')
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t))
    } else {
      el.classList.add('reveal')
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
