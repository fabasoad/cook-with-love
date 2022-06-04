/// <reference types="jest" />
import { shallow } from 'enzyme'
import * as React from 'react'
import FooterContacts from '../../../components/Footer/FooterContacts'

describe(FooterContacts.name, () => {
  test('should render FooterContacts correctly', () =>
    expect(shallow(<FooterContacts />)).toMatchSnapshot()
  )
})
