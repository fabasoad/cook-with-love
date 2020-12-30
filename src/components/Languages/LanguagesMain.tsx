import * as React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageLinkItem from './LanguageLinkItem'
import LanguageTextItem from './LanguageTextItem'

export default function LanguagesMain() {
  const { t } = useTranslation()
  return (
    <div id="languages" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('cook-with-love-languages-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="language-list col text-center">
            <LanguageLinkItem code="jp" text="JLPT N5" url="https://drive.google.com/file/d/1wDeulFdf9-8DBa_k0F8tiRUtdlG7mh3L/view?usp=sharing" />
            <LanguageTextItem code="gb" text="Basic" />
            <LanguageTextItem code="ru" text={t('cook-with-love-languages-native')} />
            <LanguageTextItem code="ua" text={t('cook-with-love-languages-native')} />
          </div>
        </div>
      </div>
    </div>
  )
}
