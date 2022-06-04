/// <reference types="jest" />
import { shallow } from 'enzyme'
import * as React from 'react'
import FooterEmail from '../../../components/Footer/FooterEmail'

describe(FooterEmail.name, () => {
  test('should render FooterEmail correctly', () =>
    expect(shallow(<FooterEmail />)).toMatchSnapshot()
  )
})
