import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme.js'
import { useContent } from '../i18n.js'

export default function ThemeToggle({ variant = 'nav' }) {
  const [theme, toggle] = useTheme()
  const { ui } = useContent()
  const isDark = theme === 'dark'
  const label = isDark ? ui.themeToLight : ui.themeToDark
  const floating = variant === 'floating'

  const icon = 'absolute transition-all duration-500 ease-out'
  const on = 'rotate-0 scale-100 opacity-100'
  const off = 'rotate-90 scale-50 opacity-0'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      style={
        floating
          ? {
              bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
              right: 'max(1.25rem, env(safe-area-inset-right))',
            }
          : undefined
      }
      className={`relative grid shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-accent hover:text-accent ${
        floating
          ? 'fixed z-40 h-12 w-12 bg-surface/90 shadow-card backdrop-blur-xl'
          : 'h-10 w-10 md:h-9 md:w-9'
      }`}
    >
      <Sun size={18} strokeWidth={2} aria-hidden="true" className={`${icon} ${isDark ? on : off}`} />
      <Moon size={18} strokeWidth={2} aria-hidden="true" className={`${icon} ${isDark ? off : on}`} />
    </button>
  )
}