import React from 'react'
import FooterContact from './FooterContact'
import FooterDetails from './FooterDetails'
export default function Footer() {
  return (
    <section className="flex justify-center items-center gap-[90px] mt-10 bg-blue-600 h-[400px]">
       <FooterContact/>
        <FooterDetails/>
      </section>
  )
}
