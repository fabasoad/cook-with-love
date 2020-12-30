/// <reference path='./RangeMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import RangeItem from './RangeItem'

import imgArkaDeutscheLieferadresse from '../../assets/images/range/deutsche_lieferadresse_website.jpg'
import imgArkaInvebstor from '../../assets/images/range/invebstor.jpg'
import imgArkaMedisport from '../../assets/images/range/medisport_website.jpg'
import imgArkaPrintAndPost from '../../assets/images/range/print_and_post_website.jpg'
import imgArkaWebsite from '../../assets/images/range/arka_website.png'
import imgArkaWorkPlus from '../../assets/images/range/work_plus.png'
import imgArkaZakupki from '../../assets/images/range/zakupki_website.png'
import imgBitcoinComGames from '../../assets/images/range/bitcoin.com_games.png'
import imgBitcoinComGamesAdmin from '../../assets/images/range/bitcoin.com_games_admin.png'
import imgBitcoinComGamesAndroid from '../../assets/images/range/bitcoin.com_android.png'
import imgBitcoinComMarkets from '../../assets/images/range/bitcoin.com_markets.png'
import imgLohikaHpeAlm from '../../assets/images/range/alm.jpg'
import imgLohikaHpeAlmRobot from '../../assets/images/range/alm_robot.png'
import imgLohikaHpeLabManagement from '../../assets/images/range/lab_management.jpg'
import imgLohikaEarnin from '../../assets/images/range/earnin.png'
import imgLohikaPrysm from '../../assets/images/range/prysm_iphone_app.png'
import imgSMA from '../../assets/images/range/sma.png'

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
            url="https://markets.bitcoin.com/"
            name="Markets"
            title={t('cook-with-love-range-markets-title')}
            subtitle={t('cook-with-love-range-markets-subtitle')}
            img={imgBitcoinComMarkets}
          />
          <RangeItem
            url="https://games.bitcoin.com/"
            name="Games"
            title={t('cook-with-love-range-casino-web-app-title')}
            subtitle={t('cook-with-love-range-casino-web-app-subtitle')}
            img={imgBitcoinComGames}
          />
          <RangeItem
            url="https://games.bitcoin.com/"
            name="Games Admin"
            title={t('cook-with-love-range-casino-admin-web-app-title')}
            subtitle={t('cook-with-love-range-casino-admin-web-app-subtitle')}
            img={imgBitcoinComGamesAdmin}
          />
          <RangeItem
            url="https://games.bitcoin.com/android"
            name="Games Android"
            title={t('cook-with-love-range-casino-android-app-title')}
            subtitle={t('cook-with-love-range-casino-android-app-subtitle')}
            img={imgBitcoinComGamesAndroid}
          />
          <RangeItem
            url="https://www.earnin.com/"
            name="Earnin"
            title={t('cook-with-love-range-earnin-title')}
            subtitle={t('cook-with-love-range-earnin-subtitle')}
            img={imgLohikaEarnin}
          />
          <RangeItem
            url="https://www.prysm.com/software/iphone-app/"
            name="Prysm iPhone App"
            title={t('cook-with-love-range-prysm-title')}
            subtitle={t('cook-with-love-range-prysm-subtitle')}
            img={imgLohikaPrysm}
          />
          <RangeItem
            url="https://drive.google.com/drive/folders/163jhUuVrBCEYQ503sa1Y1M7KG--1gwaj?usp=sharing"
            name="Southern Marine Agency Website"
            title={t('cook-with-love-range-sma-title')}
            subtitle={t('cook-with-love-range-sma-subtitle')}
            img={imgSMA}
          />
          <RangeItem
            url="https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/Admin/sa_robot_toc.htm"
            name="ALM Robot"
            title={t('cook-with-love-range-alm-robot-title')}
            subtitle={t('cook-with-love-range-alm-robot-subtitle')}
            img={imgLohikaHpeAlmRobot}
          />
          <RangeItem
            url="https://www.microfocus.com/en-us/products/application-lifecycle-management/overview"
            name="ALM"
            title={t('cook-with-love-range-alm-title')}
            subtitle={t('cook-with-love-range-alm-subtitle')}
            img={imgLohikaHpeAlm}
          />
          <RangeItem
            url="https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/lm_ag.htm"
            name="Lab Management"
            title={t('cook-with-love-range-alm-lab-management-title')}
            subtitle={t('cook-with-love-range-alm-lab-management-subtitle')}
            img={imgLohikaHpeLabManagement}
          />
          <RangeItem
            url="https://youtu.be/8wTcyZEtQx8"
            name="Invebstor"
            title={t('cook-with-love-range-invebstor-title')}
            subtitle={t('cook-with-love-range-invebstor-subtitle')}
            img={imgArkaInvebstor}
          />
          <RangeItem
            url="https://youtu.be/eRxTKZ0knsg"
            name="Work+"
            title={t('cook-with-love-range-work-plus-title')}
            subtitle={t('cook-with-love-range-work-plus-subtitle')}
            img={imgArkaWorkPlus}
          />
          <RangeItem
            url="https://www.arka-media.de/"
            name="ARKA Website"
            title={t('cook-with-love-range-arka-title')}
            subtitle={t('cook-with-love-range-arka-subtitle')}
            img={imgArkaWebsite}
          />
          <RangeItem
            url="https://www.deutsche-lieferadresse.com/"
            name="Deutsche Lieferadresse Website"
            title={t('cook-with-love-range-deutsche-lieferadresse-title')}
            subtitle={t('cook-with-love-range-deutsche-lieferadresse-subtitle')}
            img={imgArkaDeutscheLieferadresse}
          />
          <RangeItem
            url="http://medisport-garmisch.de/"
            name="Medisport Website"
            title={t('cook-with-love-range-medisport-title')}
            subtitle={t('cook-with-love-range-medisport-subtitle')}
            img={imgArkaMedisport}
          />
          <RangeItem
            url="#range"
            name="Print &amp; Post Website"
            title={t('cook-with-love-range-print-and-post-title')}
            subtitle={t('cook-with-love-range-print-and-post-subtitle')}
            img={imgArkaPrintAndPost}
          />
          <RangeItem
            url="https://zakupki-de.com.ua/"
            name="Zakupki Website"
            title={t('cook-with-love-range-zakupki-title')}
            subtitle={t('cook-with-love-range-zakupki-subtitle')}
            img={imgArkaZakupki}
          />
        </div>
      </div>
    </div>
  )
}
