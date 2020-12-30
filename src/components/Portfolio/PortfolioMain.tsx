/// <reference path='./PortfolioMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import PortfolioItem from './PortfolioItem'

import imgArkaDeutscheLieferadresse from '../../assets/images/portfolio/deutsche_lieferadresse_website.jpg'
import imgArkaInvebstor from '../../assets/images/portfolio/invebstor.jpg'
import imgArkaMedisport from '../../assets/images/portfolio/medisport_website.jpg'
import imgArkaPrintAndPost from '../../assets/images/portfolio/print_and_post_website.jpg'
import imgArkaWebsite from '../../assets/images/portfolio/arka_website.png'
import imgArkaWorkPlus from '../../assets/images/portfolio/work_plus.png'
import imgArkaZakupki from '../../assets/images/portfolio/zakupki_website.png'
import imgBitcoinComGames from '../../assets/images/portfolio/bitcoin.com_games.png'
import imgBitcoinComGamesAdmin from '../../assets/images/portfolio/bitcoin.com_games_admin.png'
import imgBitcoinComGamesAndroid from '../../assets/images/portfolio/bitcoin.com_android.png'
import imgBitcoinComMarkets from '../../assets/images/portfolio/bitcoin.com_markets.png'
import imgLohikaHpeAlm from '../../assets/images/portfolio/alm.jpg'
import imgLohikaHpeAlmRobot from '../../assets/images/portfolio/alm_robot.png'
import imgLohikaHpeLabManagement from '../../assets/images/portfolio/lab_management.jpg'
import imgLohikaEarnin from '../../assets/images/portfolio/earnin.png'
import imgLohikaPrysm from '../../assets/images/portfolio/prysm_iphone_app.png'
import imgSMA from '../../assets/images/portfolio/sma.png'

export default function PortfolioMain() {
  const { t } = useTranslation()
  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title text-center center">
          <h2>{t('cook-with-love-portfolio-title')}</h2>
          <hr />
        </div>
        <div className="row">
          <PortfolioItem
            url="https://markets.bitcoin.com/"
            name="Markets"
            title={t('cook-with-love-portfolio-markets-title')}
            subtitle={t('cook-with-love-portfolio-markets-subtitle')}
            img={imgBitcoinComMarkets}
          />
          <PortfolioItem
            url="https://games.bitcoin.com/"
            name="Games"
            title={t('cook-with-love-portfolio-casino-web-app-title')}
            subtitle={t('cook-with-love-portfolio-casino-web-app-subtitle')}
            img={imgBitcoinComGames}
          />
          <PortfolioItem
            url="https://games.bitcoin.com/"
            name="Games Admin"
            title={t('cook-with-love-portfolio-casino-admin-web-app-title')}
            subtitle={t('cook-with-love-portfolio-casino-admin-web-app-subtitle')}
            img={imgBitcoinComGamesAdmin}
          />
          <PortfolioItem
            url="https://games.bitcoin.com/android"
            name="Games Android"
            title={t('cook-with-love-portfolio-casino-android-app-title')}
            subtitle={t('cook-with-love-portfolio-casino-android-app-subtitle')}
            img={imgBitcoinComGamesAndroid}
          />
          <PortfolioItem
            url="https://www.earnin.com/"
            name="Earnin"
            title={t('cook-with-love-portfolio-earnin-title')}
            subtitle={t('cook-with-love-portfolio-earnin-subtitle')}
            img={imgLohikaEarnin}
          />
          <PortfolioItem
            url="https://www.prysm.com/software/iphone-app/"
            name="Prysm iPhone App"
            title={t('cook-with-love-portfolio-prysm-title')}
            subtitle={t('cook-with-love-portfolio-prysm-subtitle')}
            img={imgLohikaPrysm}
          />
          <PortfolioItem
            url="https://drive.google.com/drive/folders/163jhUuVrBCEYQ503sa1Y1M7KG--1gwaj?usp=sharing"
            name="Southern Marine Agency Website"
            title={t('cook-with-love-portfolio-sma-title')}
            subtitle={t('cook-with-love-portfolio-sma-subtitle')}
            img={imgSMA}
          />
          <PortfolioItem
            url="https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/Admin/sa_robot_toc.htm"
            name="ALM Robot"
            title={t('cook-with-love-portfolio-alm-robot-title')}
            subtitle={t('cook-with-love-portfolio-alm-robot-subtitle')}
            img={imgLohikaHpeAlmRobot}
          />
          <PortfolioItem
            url="https://www.microfocus.com/en-us/products/application-lifecycle-management/overview"
            name="ALM"
            title={t('cook-with-love-portfolio-alm-title')}
            subtitle={t('cook-with-love-portfolio-alm-subtitle')}
            img={imgLohikaHpeAlm}
          />
          <PortfolioItem
            url="https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/lm_ag.htm"
            name="Lab Management"
            title={t('cook-with-love-portfolio-alm-lab-management-title')}
            subtitle={t('cook-with-love-portfolio-alm-lab-management-subtitle')}
            img={imgLohikaHpeLabManagement}
          />
          <PortfolioItem
            url="https://youtu.be/8wTcyZEtQx8"
            name="Invebstor"
            title={t('cook-with-love-portfolio-invebstor-title')}
            subtitle={t('cook-with-love-portfolio-invebstor-subtitle')}
            img={imgArkaInvebstor}
          />
          <PortfolioItem
            url="https://youtu.be/eRxTKZ0knsg"
            name="Work+"
            title={t('cook-with-love-portfolio-work-plus-title')}
            subtitle={t('cook-with-love-portfolio-work-plus-subtitle')}
            img={imgArkaWorkPlus}
          />
          <PortfolioItem
            url="https://www.arka-media.de/"
            name="ARKA Website"
            title={t('cook-with-love-portfolio-arka-title')}
            subtitle={t('cook-with-love-portfolio-arka-subtitle')}
            img={imgArkaWebsite}
          />
          <PortfolioItem
            url="https://www.deutsche-lieferadresse.com/"
            name="Deutsche Lieferadresse Website"
            title={t('cook-with-love-portfolio-deutsche-lieferadresse-title')}
            subtitle={t('cook-with-love-portfolio-deutsche-lieferadresse-subtitle')}
            img={imgArkaDeutscheLieferadresse}
          />
          <PortfolioItem
            url="http://medisport-garmisch.de/"
            name="Medisport Website"
            title={t('cook-with-love-portfolio-medisport-title')}
            subtitle={t('cook-with-love-portfolio-medisport-subtitle')}
            img={imgArkaMedisport}
          />
          <PortfolioItem
            url="#portfolio"
            name="Print &amp; Post Website"
            title={t('cook-with-love-portfolio-print-and-post-title')}
            subtitle={t('cook-with-love-portfolio-print-and-post-subtitle')}
            img={imgArkaPrintAndPost}
          />
          <PortfolioItem
            url="https://zakupki-de.com.ua/"
            name="Zakupki Website"
            title={t('cook-with-love-portfolio-zakupki-title')}
            subtitle={t('cook-with-love-portfolio-zakupki-subtitle')}
            img={imgArkaZakupki}
          />
        </div>
      </div>
    </div>
  )
}
