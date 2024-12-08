import React from 'react'
import Image from 'next/image'

function Browse() {
  return (
    <><section className='flex flex-col items-center'>
        
        <h1 className='text-[33px] text-bold'>Browse The Range</h1>
        <p className='mb-[63px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='flex flex justify-between gap-[20px]'>
        <div className='text-center'><Image
         src="/browse/img1.svg"
         alt="pic"
         width={381}
         height={480}
         />
         <h2 className='text-[24px] leading-auto text-semibold mt-[30px]'>Living</h2> </div> 
        
        {/* sec */}
        <div className='text-center'><Image
         src="/browse/img2.png"
         alt="pic"
         width={381}
         height={480}
         />
         <h2 className='text-[24px] leading-auto text-semibold mt-[30px]'>Dining</h2> </div> 
        
       {/* third */}
       <div className='text-center'><Image
         src="/browse/img3.png"
         alt="pic"
         width={381}
         height={480}
         />
         <h2 className='text-[24px] leading-auto text-semibold mt-[30px]'>Bedroom</h2> </div> 
        </div>

        
        


        </section></>
  )
}

export default Browse