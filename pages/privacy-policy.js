import React from 'react'
import Privacy from '../components/Privacy'
import Navbar from '../components/Navbar'
import { getHome, getallmeta, getPrivacy } from '../locale/index'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export async function getStaticProps({ locale }) {
  const home = getHome(locale)
  const allmeta = getallmeta(locale)
  const privacy = getPrivacy(locale)
  return {
    props: {
      home,
      allmeta,
      privacy,
      meta: {
        title: allmeta.homeMetaTitle,
        description: allmeta.homeMetadescription,
        keywords: allmeta.homeMetakeywords,
        pageUrl: 'https://www.hotstarparty.party/',
        featuredImage: '/logo.png',
      },
    },
  }
}

export default function privacy({ home = {}, privacy }) {
  return (
    <div>
      <Navbar installBtn={home.header.installBtn} />
      <Banner heading={home.header.navBarHeading} />
      <Privacy privacy={privacy} />
      <Footer installBtn={home.header.installBtn} footer={home.footer} />
    </div>
  )
} 
