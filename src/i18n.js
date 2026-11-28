import { useSyncExternalStore } from 'react'
import { content, DEFAULT_LANG, LANGS } from './data/content.js'

const KEY = 'lang'
const listeners = new Set()

const read = () => {
  const l = document.documentElement.getAttribute('lang')
  return LANGS.includes(l) ? l : DEFAULT_LANG
}
const subscribe = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function applyMeta(c) {
  document.title = c.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', c.meta.title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', c.meta.ogDescription)
}

export function setLang(next) {
  if (!LANGS.includes(next) || next === read()) return
  document.documentElement.setAttribute('lang', next)
  try {
    localStorage.setItem(KEY, next)
  } catch {}
  applyMeta(content[next])
  listeners.forEach((fn) => fn())
}

/** Terapkan bahasa tersimpan sebelum render pertama (default: Indonesia). */
export function initLang() {
  let saved = DEFAULT_LANG
  try {
    const s = localStorage.getItem(KEY)
    if (LANGS.includes(s)) saved = s
  } catch {}
  document.documentElement.setAttribute('lang', saved)
  applyMeta(content[saved])
}

export function useLang() {
  return useSyncExternalStore(subscribe, read, () => DEFAULT_LANG)
}

/** Seluruh teks untuk bahasa yang sedang aktif. */
export function useContent() {
  return content[useLang()]
}
