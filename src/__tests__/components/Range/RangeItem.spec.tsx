/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import RangeItem from '../../../components/Range/RangeItem'

test('should render RangeItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<RangeItem
    img="test-img"
    name="test-name"
    title="test-title"
  />)
  expect(wrapper).toMatchSnapshot()
})
