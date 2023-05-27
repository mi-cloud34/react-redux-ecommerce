import React from 'react'
import Slider from 'react-slick';

export default function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='py-10'><Slider {...settings} >
    <div className='!flex items-center bg-gray-100 px-20 '>
    <div>
        <div className='text-6xl font-bold'>Güzel bi ayakabı</div>
        <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sint.</div>
        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
     </div>
    <img  src="https://picsum.photos/id/235/800/400" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-20 '>
    <div>
        <div className='text-6xl font-bold'>Güzel bi ayakabı</div>
        <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sint.</div>
        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
     </div>
    <img  src="https://picsum.photos/id/236/800/400" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-20 '>
    <div>
        <div className='text-6xl font-bold'>Güzel bi ayakabı</div>
        <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sint.</div>
        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
     </div>
    <img  src="https://picsum.photos/id/237/800/400" alt="" />
    </div>
    </Slider>
    </div>
  )
}
