/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from '../../components/Header'
import { useTranslation } from '../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render Header correctly', () => {
  const wrapper: ShallowWrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  new Array<string>(
    'cook-with-love-header-subtitle',
  ).forEach((n, i) => expect(tMock).toHaveBeenNthCalledWith(i + 1, n))
  expect(
    wrapper.find('Trans').childAt(0).text()
  ).toBe('cook-with-love-header-title')
})
