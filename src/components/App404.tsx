import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Locale, AppActions } from '../store/locale/types'
import { AppState } from '../store/configureStore'

interface App404Props {
}

type Props = App404Props & LinkDispatchProps & LinkStateProps

export function App404(props: Props) {
  const { t } = useTranslation()


  return (
    <div className={`font-regular font-${props.locale.code === 'jp' ? '' : 'non-'}jp`}>
      <p>{t('cook-with-love-404-text-1')}</p>
    </div>
  )
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: App404Props
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: App404Props
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App404)
