import React from 'react'
import Componentanoua from './Componentanoua'
export default function FooterDetails() {
  return (

    <div className="bg-white p-4 border-2 border-blue-900  rounded-md flex flex-col justify-center items-center w-[290px]">
    <div className="flex float-right">
      <Componentanoua srcImg1={"/25533.jpg"} />
      <Componentanoua srcImg1={"/25533.jpg"} />
      <Componentanoua srcImg1={"/25533.jpg"} />
      <Componentanoua srcImg1={"/25533.jpg"} />
      <Componentanoua srcImg1={"/25533.jpg"} />

    </div>
    <img src="/logo.png" className="w-[150px]" alt="" />
    <a href="mailto: websiteplanette.com">websiteplanette.com</a>
    <a href="tel:+4733378901">+47 333 78 901</a>

    <div className="flex justify-center items-center mt-2 gap-1">
      <a href="https://www.facebook.com/">
        <Componentanoua srcImg1={"/facebook_circle_color-512.webp"} />
      </a>
      <a href="https://www.linkedin.com/feed/">
        <Componentanoua srcImg1={"/circle-linkedin-512.webp"} />
      </a>
      <a href="https://twitter.com/?lang=ro">
        <Componentanoua
          srcImg1={"/png-clipart-twitter-twitter-thumbnail.png"}
        />{" "}
      </a>
    </div>
  </div>  )
}
