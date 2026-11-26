import { useSyncExternalStore } from 'react'

const KEY = 'theme'
const listeners = new Set()

const read = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
const subscribe = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function setTheme(next) {
  const root = document.documentElement
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reduce) {
    root.classList.add('theme-anim')
    window.setTimeout(() => root.classList.remove('theme-anim'), 450)
  }

  root.dataset.theme = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* penyimpanan tidak tersedia: tema tetap berlaku untuk sesi ini */
  }

  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', next)
  const bg = getComputedStyle(root).getPropertyValue('--color-bg').trim()
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)

  listeners.forEach((fn) => fn())
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, () => 'dark')
  const toggle = () => setTheme(read() === 'dark' ? 'light' : 'dark')
  return [theme, toggle]
}
