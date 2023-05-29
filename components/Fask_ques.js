import { useState } from 'react'
import siteConfig from '../siteConfig'
import CustomAccordion from './CustomAccordion'

function Fask_question() {
  const [show, setShow] = useState('')

  function toggleFunc(item) {
    if (item.id === show) return setShow('')
    setShow(item.id)
  }
  return (
    <>
      <div className="f-ask-container m-auto mt-14 w-[80%]">
        {/* text section */}
        <div className="f-ask-box  mb-10 flex flex-col items-center justify-center border-b-2  border-white">
          <h4 className="primary_text_color mb-5 p-2 text-2xl font-semibold md:text-3xl">
            UNIQUE FEATURES
          </h4>
          <div className="-mt-2 mb-5">
            <p className="text-white">
              The Hotstar party extension is specially curated for all Hotstar
              fans. Whether it’s shows, movies, or even live sports, you will be
              able to enjoy the watch party seamlessly. Furthermore, it has some
              wonderful features to enhance your experience and bring you to
              ease. Let’s break into the features.
            </p>
          </div>
        </div>
        <div className="accordion " id="accordionExample">
          {siteConfig.faq.accordian.map((item) => (
            <div className="accordion-item" key={item.id}>
              <CustomAccordion
                item={item}
                show={show}
                toggleFunc={toggleFunc}
                key={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fask_question
