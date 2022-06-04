/// <reference types="jest" />
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import FooterMain from '../../../components/Footer/FooterMain'
import { useTranslation } from '../../__mocks__/react-i18next'

describe(FooterMain.name, () => {
  let tMock

  beforeAll(() => {
    tMock = useTranslation().t
  })

  test('should render FooterMain correctly', () => {
    const wrapper: ShallowWrapper = shallow(<FooterMain />)
    expect(wrapper).toMatchSnapshot()
    expect(tMock).toHaveBeenCalledTimes(1)
    expect(tMock).toHaveBeenCalledWith('cook-with-love-contact-title')
  })
})
