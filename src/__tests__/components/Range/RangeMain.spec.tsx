/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import RangeMain from '../../../components/Range/RangeMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render RangeMain correctly', () => {
  const wrapper: ShallowWrapper = shallow(<RangeMain />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(9)
  expect(tMock).toHaveBeenNthCalledWith(1, 'cook-with-love-range-title')
  for (let i = 1; i < 9; i += 2) {
    expect(tMock).toHaveBeenNthCalledWith(
      i + 1, expect.stringMatching(/^cook-with-love-range-.*-title$/)
    )
  }
})
