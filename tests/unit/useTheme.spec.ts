import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('useTheme', () => {
  beforeEach(() => {
    // Clear storage and reset modules between tests
    localStorage.clear()
    vi.resetModules()
  })

  it('reads theme from localStorage when present', async () => {
    localStorage.setItem('theme', 'light')
    const mod = await import('@utils/theme')
    const { themeSignal } = mod
    expect(themeSignal.value).toBe('light')
  })

  it('defaults to auto when no localStorage', async () => {
    const mod = await import('@utils/theme')
    const { themeSignal } = mod
    expect(themeSignal.value).toBe('auto')
  })

  it('toggleTheme cycles through themes: dark -> light -> auto -> dark', async () => {
    // Start with dark
    localStorage.setItem('theme', 'dark')
    // Mock matchMedia for auto theme (dark system preference)
    Object.defineProperty(window, 'matchMedia', {
      value: (q: string) => ({ matches: true, media: q, addListener: () => {}, removeListener: () => {} }),
    })
    const mod = await import('@utils/theme')
    const { themeSignal, toggleTheme } = mod
    expect(themeSignal.value).toBe('dark')
    
    // dark -> light
    toggleTheme()
    expect(themeSignal.value).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    
    // light -> auto
    toggleTheme()
    expect(themeSignal.value).toBe('auto')
    expect(localStorage.getItem('theme')).toBe('auto')
    // auto should apply system theme (dark in this mock)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    
    // auto -> dark
    toggleTheme()
    expect(themeSignal.value).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('auto theme applies system preference', async () => {
    localStorage.setItem('theme', 'auto')
    // Simulate light system preference
    Object.defineProperty(window, 'matchMedia', {
      value: (q: string) => ({ matches: false, media: q, addListener: () => {}, removeListener: () => {} }),
    })
    const mod = await import('@utils/theme')
    const { themeSignal } = mod
    expect(themeSignal.value).toBe('auto')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('defaults to dark when window is undefined', async () => {
    // Simulate module load in a non-browser environment
    vi.resetModules()
    const savedWindow = (globalThis as any).window
    try {
      // remove window to emulate Node-like environment
      delete (globalThis as any).window
      const mod = await import('@utils/theme')
      const { themeSignal } = mod
      expect(themeSignal.value).toBe('dark')
    } finally {
      // restore global.window and reset modules to avoid side-effects
      (globalThis as any).window = savedWindow
      vi.resetModules()
    }
  })
})
