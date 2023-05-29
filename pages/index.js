import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'
import BottomText from '../components/BottomText'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Hotstar Party - Host a Virtual Watch Party Online | Install Extension Now',
        description:
          'Hotstar Party helps you watch your favorite movies and shows on Hotstar. Install the Extension now to host virtual watch parties.',
        keywords:
          'Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Best Movies on Hotstar',
        pageUrl: 'https://www.hotstarparty.party/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <BottomText />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
