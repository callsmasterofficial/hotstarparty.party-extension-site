import React from 'react'

import Textques from './Textques'
import siteConfig from '../siteConfig'
import InstallButton from './InstallButton'

function Text() {
  // linksUri

  // function for question

  return (
    <div className="main-container w-screen m-auto ">
      {/* first text container  */}
      <div className="text-container -mt-5  mb-10 w-[80%] m-auto  md:mt-5 md:w-[100%]  ml-0 flex h-16  items-center justify-center">
        <h2 className="primary_text_color  text-2xl  md:text-[32px] font-semibold text-center w-[100%]">
          {` ${siteConfig.section.first.heading}`}
        </h2>
      </div>

      {/* Second text contaner start here */}
      <div className="second-container mb-10  flex">
        <div className="innner-text-container m-auto -mt-[20px]  md:flex w-[80%] md:mt-0">
          <div className="paragraph-box w-[100%] md:w-[50%]  flex justify-center flex-col">
            <div className="p-tag primary_text_color mb-[28px] mr-[20px] p-[4px]  text-2xl font-medium" dangerouslySetInnerHTML={{__html:siteConfig.section.first.html}} />
            {/* button tag start here */}
            <div className='mt-6 '>
            <InstallButton />
            </div>
          </div>

          {/* video */}
          <div className="paragraph-box w-[100%] mb-16 md:w-[50%]">
            <video className="video mt-10 md:m-0" controls autoPlay muted>
              <source
                src={siteConfig.section.first.video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      {/* middle buttons */}

      {/* after video text section  */}
      <div className="after-video-container w-screen -mt-14  md:mt-14" >
        

        <div className="text-box  m-auto mb-5  w-[80%]">
          <div className="text flex justify-center ">
            <h3 className="primary_text_color text-xl md:text-[30px] font-bold">
              {siteConfig.section.second.heading}
            </h3>
          </div>

          {/* afterborder_text */}
          <div className="after-border-text mt-5 flex items-center justify-center">
            <p className="primary_text_color mb-10">
            {siteConfig.section.second.subHeading}
            </p>
          </div>

          {/* afterborder_video & text*/}
          <div className="m-auto mb-24 w-[95%]">
            <div className="main-video-text-container mt-5 md:flex ">
              <div className="video-box w-[100%] -mt-6 m-auto md:mr-[24px] md:w-[50%] md:mt-0 pt-[30px]">
                <video className="video " controls autoPlay muted>
                  <source
                    src={siteConfig.section.second.video}
                    type="video/mp4"
                  />
                </video>
              </div>
              {/* textcontainer start here */}

              <div className="text-border-container mt-8 w-[100%] h-fit md:w-[50%] md:mt-0   cursor-pointer">
                <Textques />
              </div>
            </div>
          </div>
          {/* text & video ends here */}
          <div className='w-[100%] -mt-10  flex justify-center items-center md:w-[100%]  md:mt-0'> 
          <InstallButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Text
