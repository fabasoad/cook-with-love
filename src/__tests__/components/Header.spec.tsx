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
  expect(tMock).toHaveBeenCalledTimes(3)
  new Array<string>(
    'cook-with-love-header-occupation',
    'cook-with-love-header-about-me',
    'cook-with-love-header-portfolio'
  ).forEach((n, i) => expect(tMock).toHaveBeenNthCalledWith(i + 1, n))
  expect(
    wrapper.find('Trans').childAt(0).text()
  ).toBe('cook-with-love-header-title')
})
