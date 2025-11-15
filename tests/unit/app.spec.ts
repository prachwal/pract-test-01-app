import { describe, it, expect } from 'vitest'
import App from '@src/app'

describe('App module', () => {
  it('exports a function/component', () => {
    expect(typeof App).toBe('function')
  })
})
