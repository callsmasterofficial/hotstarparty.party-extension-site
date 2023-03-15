import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"Hotstar Party - Host a Virtual Watch Party Online | Install Extension Now",
        description:"Hotstar Party helps you watch your favorite movies and shows on Hotstar. Install the Extension now to host virtual watch parties.",
        keywords:"Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Best Movies on Hotstar",
        pageUrl:"https://www.hotstarparty.party/",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error