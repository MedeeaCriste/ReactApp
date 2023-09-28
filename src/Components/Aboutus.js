import React from 'react'
import Componenta from './Componenta'
import Title from './Title'
export default function Aboutus() {
  return (
    <div>
         <section className="flex flex-col justify-center items-center gap-14 bg-blue-900 mx-[22%] mt-[-70px] text-white">
        <Title 
        titlu1="About us"
        />
        <div className="flex justify-center items-center">
          <div className="border-r-2 pb-2 mb-14">
            <Componenta
              srcImg={"/ana.webp"}
              titlu="Ana Maria"
              descriere="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        <div className="mb-14">
          <Componenta
            srcImg={"/scar.webp"}
            titlu="Scarlett"
            descriere="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          </div>
        </div>
      </section>
    </div>
  )
}
