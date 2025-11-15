import { describe, it, expect, beforeEach } from 'vitest'
import { useSidebar } from '@hooks/useSidebar'

describe('useSidebar', () => {
  beforeEach(() => {
    // Ensure starting closed
    const { closeSidebar } = useSidebar()
    closeSidebar()
  })

  it('has initial state closed', () => {
    const { isOpen } = useSidebar()
    expect(isOpen.value).toBe(false)
  })

  it('openSidebar sets isOpen and locks body scroll', () => {
    const { isOpen, openSidebar } = useSidebar()
    openSidebar()
    expect(isOpen.value).toBe(true)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('closeSidebar unsets isOpen and restores body scroll', () => {
    const { isOpen, openSidebar, closeSidebar } = useSidebar()
    openSidebar()
    expect(isOpen.value).toBe(true)
    closeSidebar()
    expect(isOpen.value).toBe(false)
    expect(document.body.style.overflow).toBe('')
  })
})
