import React from 'react'
import Text2ques from './Text2ques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'


function Text2() {
  
  return (
    <div className="text2-container pb-[20px] m-auto  mt-14 w-[80%] border-b-2 border-white"  >
      <div className="text2-inner_container  md:mt-0 ">
        <div className="text-box flex items-center justify-center ">
          <h3 className="primary_text_color text-2xl -mt-8 mb-5 p-2 md:text-3xl md:mt-0 font-semibold">
           {siteConfig.section.three.heading}
          </h3>
        </div>
        <p className='text-white m-auto w-[100%] text-center'>
            {siteConfig.section.three.subHeading}
          </p>
      </div>

      {/* video text container start here */}
      <div className="main-container  m-auto mt-10 md:flex w-[100%] ">
        <div className=" md:ml-4 h-fit   md:w-[50%] cursor-pointer">
          {/* first question */}
          <Text2ques />
        </div>
        {/* text ends here */}
        {/* video start here */}
        <div className="video-box  ml-2 md:w-[50%] md:mt-0 " >
          <video controls autoPlay muted>
            <source src={siteConfig.section.three.video} />
          </video>
        </div>
      </div>
      <div className='flex items-center justify-center   md:w-[100%]  mt-12'>
      <InstallButton />
      </div>
    </div>
  )
}

export default Text2
