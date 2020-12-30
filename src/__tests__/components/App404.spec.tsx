/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import { App404 } from '../../components/App404'

new Array<string>('jp', 'gb').forEach((l) =>
  test(`should render App404 with ${l} locale correctly`, () =>
    expect(shallow(<App404 locale={{ code: l, title: '' }} />)).toMatchSnapshot()
  )
)
