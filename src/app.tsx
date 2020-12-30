import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import LoadingSpinner from './components/LoadingSpinner'

import './styles/style.scss'

import './libs/fontawesome'
import { startLoadLocale } from './store/locale/actions'
import { store } from './store/configureStore'

store.dispatch(startLoadLocale())

ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById('app')
)
