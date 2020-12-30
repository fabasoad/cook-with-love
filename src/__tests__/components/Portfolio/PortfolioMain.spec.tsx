/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import PortfolioMain from '../../../components/Portfolio/PortfolioMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render PortfolioMain correctly', () => {
  const wrapper: ShallowWrapper = shallow(<PortfolioMain />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(35)
  expect(tMock).toHaveBeenNthCalledWith(1, 'cook-with-love-portfolio-title')
  for (let i = 1; i < 34; i += 2) {
    expect(tMock).toHaveBeenNthCalledWith(
      i + 1, expect.stringMatching(/^cook-with-love-portfolio-.*-title$/)
    )
    expect(tMock).toHaveBeenNthCalledWith(
      i + 2, expect.stringMatching(/^cook-with-love-portfolio-.*-subtitle$/)
    )
  }
})
