/// <reference types="jest" />
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { version } from '../../../../package.json'
import FooterInfo from '../../../components/Footer/FooterInfo'
import { useTranslation } from '../../__mocks__/react-i18next'

describe(FooterInfo.name, () => {
  let tMock

  beforeAll(() => {
    tMock = useTranslation().t
  })

  test('should render FooterInfo correctly', () => {
    const wrapper: ShallowWrapper = shallow(<FooterInfo />)
    expect(wrapper).toMatchSnapshot()
    expect(tMock).toHaveBeenCalledTimes(1)
    expect(tMock).toHaveBeenCalledWith(
      'cook-with-love-version',
      { version }
    )
  })
})
