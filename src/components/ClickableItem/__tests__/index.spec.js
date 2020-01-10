import React from 'react'
import { shallow } from 'enzyme'
import ClickableItem from '../'

describe('ClickableItem', () => {
  it('should render', () => {
    const component = shallow(<ClickableItem text="test" onClick={() => {}} />)
    expect(component).toMatchSnapshot()
  })
})
