import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product}) {
  const navigate=useNavigate();
  return (
    <div  onClick={()=>navigate(`products/${product?.id}`)} className='w-[400px] mb-5 mx-2 border  rounded-md relative cursor-pointer'>
   <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>
{product?.price}
   </div>
   <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
   <div className='text-center px-3 text-xl font-bold'>{product?.title}</div>
    </div>
  )
}
