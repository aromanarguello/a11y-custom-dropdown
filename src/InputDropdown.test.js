import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { Dropdown} from './InputDropdown.component'

test('has clickable button', () =>{
  const {container, getByText} = render(<Dropdown />)
  const openButtonNode = getByText('open')
  expect(openButtonNode.innerHTML).toMatch('open')
  const mockFn = jest.fn()
  fireEvent.click(openButtonNode, mockFn())
  console.log(container)
  expect(mockFn).toHaveBeenCalledTimes(1)
})