/// <reference path='./RangeMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import RangeItem from './RangeItem'

import * as imgBiscuitCakeCreamCheeseBerries1 from '../../assets/images/range/biscuit-cake-cream-cheese-berries-1.jpg'
import * as imgBiscuitCakeCreamCheeseBerries2 from '../../assets/images/range/biscuit-cake-cream-cheese-berries-2.jpg'
import * as imgCreamySouffleInFreezeDriedRaspberries1 from '../../assets/images/range/creamy-souffle-in-freeze-dried-raspberries-1.jpg'
import * as imgCreamySouffleInFreezeDriedRaspberries2 from '../../assets/images/range/creamy-souffle-in-freeze-dried-raspberries-2.jpg'
import * as imgHoneyCake1 from '../../assets/images/range/honey-cake-1.jpg'
import * as imgMacaronsBlackCurrant1 from '../../assets/images/range/macarons-black-currant-1.jpg'
import * as imgMacaronsBlackCurrant2 from '../../assets/images/range/macarons-black-currant-2.jpg'
import * as imgMacaronsLemon1 from '../../assets/images/range/macarons-lemon-1.jpg'
import * as imgMacaronsLemon2 from '../../assets/images/range/macarons-lemon-2.jpg'
import * as imgMarshmallow1 from '../../assets/images/range/marshmallow-1.jpg'
import * as imgMarshmallow2 from '../../assets/images/range/marshmallow-2.jpg'
import * as imgMarshmallow3 from '../../assets/images/range/marshmallow-3.jpg'
import * as imgMarshmallowZefir1 from '../../assets/images/range/marshmallow-zefir-1.jpg'
import * as imgMeringue1 from '../../assets/images/range/meringue-1.jpg'
import * as imgMeringue2 from '../../assets/images/range/meringue-2.jpg'
import * as imgSausageRolls1 from '../../assets/images/range/sausage-rolls-1.jpg'
import * as imgTiramisu1 from '../../assets/images/range/tiramisu-1.jpg'
import * as imgTiramisuMini1 from '../../assets/images/range/tiramisu-mini-1.jpg'
import * as imgVariousCreamySouffle1 from '../../assets/images/range/various-creamy-souffle-1.jpg'
import * as imgVariousCreamySouffle2 from '../../assets/images/range/various-creamy-souffle-2.jpg'

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
            name="Creamy soufflé in freeze-dried raspberries"
            title={t('cook-with-love-range-creamy-souffle-in-freeze-dried-raspberries-1-title')}
            img={imgCreamySouffleInFreezeDriedRaspberries1}
          />
          <RangeItem
            name="Creamy soufflé in freeze-dried raspberries"
            title={t('cook-with-love-range-creamy-souffle-in-freeze-dried-raspberries-2-title')}
            img={imgCreamySouffleInFreezeDriedRaspberries2}
          />
          <RangeItem
            name="Tiramisu mini"
            title={t('cook-with-love-range-tiramisu-mini-1-title')}
            img={imgTiramisuMini1}
          />
          <RangeItem
            name="Tiramisu"
            title={t('cook-with-love-range-tiramisu-1-title')}
            img={imgTiramisu1}
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
            name="Various creamy soufflé (coconut, raspberries, cocoa)"
            title={t('cook-with-love-range-various-creamy-souffle-1-title')}
            img={imgVariousCreamySouffle1}
          />
          <RangeItem
            name="Various creamy soufflé (coconut, raspberries, cocoa)"
            title={t('cook-with-love-range-various-creamy-souffle-2-title')}
            img={imgVariousCreamySouffle2}
          />
          <RangeItem
            name="Marshmallow"
            title={t('cook-with-love-range-marshmallow-zefir-1-title')}
            img={imgMarshmallowZefir1}
          />
          <RangeItem
            name="Meringue"
            title={t('cook-with-love-range-meringue-1-title')}
            img={imgMeringue1}
          />
          <RangeItem
            name="Meringue"
            title={t('cook-with-love-range-meringue-2-title')}
            img={imgMeringue2}
          />
          <RangeItem
            name="Honey cake"
            title={t('cook-with-love-range-honey-cake-1-title')}
            img={imgHoneyCake1}
          />
          <RangeItem
            name="Marshmallow"
            title={t('cook-with-love-range-marshmallow-1-title')}
            img={imgMarshmallow1}
          />
          <RangeItem
            name="Marshmallow"
            title={t('cook-with-love-range-marshmallow-2-title')}
            img={imgMarshmallow2}
          />
          <RangeItem
            name="Marshmallow"
            title={t('cook-with-love-range-marshmallow-3-title')}
            img={imgMarshmallow3}
          />
          <RangeItem
            name="Sausage rolls"
            title={t('cook-with-love-range-sausage-rolls-1-title')}
            img={imgSausageRolls1}
          />
        </div>
      </div>
    </div>
  )
}
