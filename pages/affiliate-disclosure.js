import React from 'react'
import Affiliate from '../components/Affiliate'
import Navbar from '../components/Navbar'
import { getHome, getallmeta, getAffiliate } from '../locale/index'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export async function getStaticProps({ locale }) {
    const home = getHome(locale)
    const allmeta = getallmeta(locale)
    const affiliate = getAffiliate(locale)
    return {
        props: {
            home,
            allmeta,
            affiliate,
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

export default function privacy({ home = {}, affiliate }) {
    return (
        <div>
            <Navbar installBtn={home.header.installBtn} />
            <Banner heading={home.header.navBarHeading} />
            <Affiliate affiliate={affiliate} />
            <Footer installBtn={home.header.installBtn} footer={home.footer} />
        </div>
    )
} 
