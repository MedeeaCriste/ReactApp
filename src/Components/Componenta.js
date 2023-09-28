import React from 'react'

export default function Componenta({titlu,descriere,srcImg}) {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-[400px] gap-2"> 
    
    <img className='w-[100px] h-[100px] rounded-[100%] object-cover ' src={srcImg} alt='' />
    <h1 className="text-xl font-semibold ">{titlu}</h1>
  <p className="text-md p-4 text-center ">{descriere}</p>
</div>
  )
}
