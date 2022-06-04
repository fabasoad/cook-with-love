/// <reference types="jest" />
import { shallow } from 'enzyme'
import * as React from 'react'
import FooterSocial from '../../../components/Footer/FooterSocial'

describe(FooterSocial.name, () => {
  test('should render FooterSocial correctly', () =>
    expect(shallow(<FooterSocial />)).toMatchSnapshot()
  )
})