/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render LanguageItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<LanguagesMain />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(4)
  expect(tMock).toHaveBeenNthCalledWith(1, 'cook-with-love-languages-title')
  expect(tMock).toHaveBeenNthCalledWith(2, 'cook-with-love-languages-basic')
  new Array<number>(3, 4).forEach(
    (n) => expect(tMock).toHaveBeenNthCalledWith(
      n, 'cook-with-love-languages-native'
    )
  )
})
