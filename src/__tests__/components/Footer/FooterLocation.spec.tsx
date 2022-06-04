/// <reference types="jest" />
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import FooterLocation from '../../../components/Footer/FooterLocation'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

describe(FooterLocation.name, () => {
  beforeAll(() => {
    tMock = useTranslation().t
  })

  test('should render FooterLocation correctly', () => {
    const wrapper: ShallowWrapper = shallow(<FooterLocation />)
    expect(wrapper).toMatchSnapshot()
    expect(tMock).toHaveBeenCalledTimes(1)
    expect(tMock).toHaveBeenCalledWith('cook-with-love-contact-city')
  })
})
