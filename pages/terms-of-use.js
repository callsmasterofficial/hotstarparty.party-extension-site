import React from 'react'
import Terms from '../components/Terms'
import Navbar from '../components/Navbar'
import { getHome, getallmeta, getTerm } from '../locale/index'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export async function getStaticProps({ locale }) {
    const home = getHome(locale)
    const allmeta = getallmeta(locale)
    const terms = getTerm(locale)
    return {
        props: {
            home,
            allmeta,
            terms,
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

export default function privacy({ home = {}, terms }) {
    return (
        <div>
            <Navbar installBtn={home.header.installBtn} />
            <Banner heading={home.header.navBarHeading} />
            <Terms terms={terms} />
            <Footer installBtn={home.header.installBtn} footer={home.footer} />
        </div>
    )
} 
