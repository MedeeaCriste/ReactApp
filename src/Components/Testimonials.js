import React from 'react'
import Componenta from './Componenta'
import Title from './Title'
export default function Testimonials() {
  return (
    <section className="flex flex-col justify-center items-center p-4 mt-9 bg-blue-900 ml-[22%] mr-[22%] text-white">
      <Title 
        titlu1="Testimonials"
        />
        <div className="flex justify-center items-center">
          <div className="border-r-2  ">
            <Componenta
              srcImg={"/scar.webp"}
              titlu="Scarlett"
              descriere="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            />
          </div>

          <div>
            <Componenta
              srcImg={"/ana.webp"}
              titlu="Ana Maria"
              descriere="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            />
          </div>
        </div>
      </section>
  )
}
