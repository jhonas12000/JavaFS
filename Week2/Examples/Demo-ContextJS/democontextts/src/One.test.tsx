import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import One from './One'
import { DataContext } from './App'
import { expect, test, vi } from 'vitest'

test('renders input and calls setData when typing', async () => {
  const setData = vi.fn()

  render(
    <DataContext.Provider value={{ data: '', setData }}>
      <One />
    </DataContext.Provider>
  )

  const input = screen.getByRole('textbox')
  await userEvent.type(input, 'hello')

  // Expect the mocked setData to have been called and the last call receives the full text
  expect(setData).toHaveBeenLastCalledWith('hello')
})

test('throws when not wrapped in DataContext.Provider', () => {
  // Rendering without a provider should throw the explicit error from the component
  expect(() => render(<One />)).toThrow('One must be used within a DataContext.Provider')
})
