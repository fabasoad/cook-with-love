/// <reference path='./RangeMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import RangeItem from './RangeItem'

import imgBiscuitCakeCreamCheeseBerries1 from '../../assets/images/range/biscuit-cake-cream-cheese-berries-1.jpg'
import imgBiscuitCakeCreamCheeseBerries2 from '../../assets/images/range/biscuit-cake-cream-cheese-berries-2.jpg'
import imgMacaronsBlackCurrant1 from '../../assets/images/range/macarons-black-currant-1.jpg'
import imgMacaronsBlackCurrant2 from '../../assets/images/range/macarons-black-currant-2.jpg'
import imgMacaronsLemon1 from '../../assets/images/range/macarons-lemon-1.jpg'
import imgMacaronsLemon2 from '../../assets/images/range/macarons-lemon-2.jpg'
import imgMarshmallow1 from '../../assets/images/range/marshmallow-1.jpg'
import imgMeringue1 from '../../assets/images/range/meringue-1.jpg'

export default function RangeMain() {
  const { t } = useTranslation()
  return (
    <div id="range">
      <div className="container">
        <div className="section-title text-center center">
          <h2>{t('cook-with-love-range-title')}</h2>
          <hr />
        </div>
        <div className="row">
          <RangeItem
            name="Biscuit cake with cream cheese and berries"
            title={t('cook-with-love-range-biscuit-cake-cream-cheese-berries-1-title')}
            img={imgBiscuitCakeCreamCheeseBerries1}
          />
          <RangeItem
            name="Biscuit cake with cream cheese and berries"
            title={t('cook-with-love-range-biscuit-cake-cream-cheese-berries-2-title')}
            img={imgBiscuitCakeCreamCheeseBerries2}
          />
          <RangeItem
            name="Black currant macarons"
            title={t('cook-with-love-range-macarons-black-currant-1-title')}
            img={imgMacaronsBlackCurrant1}
          />
          <RangeItem
            name="Black currant macarons"
            title={t('cook-with-love-range-macarons-black-currant-2-title')}
            img={imgMacaronsBlackCurrant2}
          />
          <RangeItem
            name="Lemon macarons"
            title={t('cook-with-love-range-macarons-lemon-1-title')}
            img={imgMacaronsLemon1}
          />
          <RangeItem
            name="Lemon macarons"
            title={t('cook-with-love-range-macarons-lemon-2-title')}
            img={imgMacaronsLemon2}
          />
          <RangeItem
            name="Marshmallow"
            title={t('cook-with-love-range-marshmallow-1-title')}
            img={imgMarshmallow1}
          />
          <RangeItem
            name="Meringue"
            title={t('cook-with-love-range-meringue-1-title')}
            img={imgMeringue1}
          />
        </div>
      </div>
    </div>
  )
}
