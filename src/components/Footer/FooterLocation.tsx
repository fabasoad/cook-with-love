import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function FooterLocation() {
  const { t } = useTranslation()
  return (
    <div className="col">
      <i className="fa fa-map-marker-alt fa-2x"></i>
      <p>{t('cook-with-love-contact-city')}</p>
    </div>
  )
}
