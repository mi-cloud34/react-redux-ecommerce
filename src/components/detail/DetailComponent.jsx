import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
export default function DetailComponent({productDetail}) {
    const dispatch=useDispatch();
    const [quantity ,setQuantity]=useState(0);
    
    console.log("detayyyy:",productDetail);
    const addCart=()=>{
      dispatch(addToCart({
        id:productDetail?.id,title:productDetail?.title,image:productDetail?.image,price:productDetail?.price,quantity:quantity
      })
    )}
  const decrement=()=>{
    if(quantity>0) setQuantity(quantity-1);
  }
  const increment=()=>{
    if(quantity<productDetail?.rating?.count) setQuantity(quantity+1);
  }
  return ( <div className='flex gap-10 my-10'>
        <img className='w-[700px] h-[500px] object-cover' src={productDetail?.image} alt="" />
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-2 text-2xl'>{productDetail?.description}</div>
            <div className='my-2 text-xl text-red-500'>Rating:{productDetail?.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500'>Count:{productDetail?.rating?.count}</div>
            <div className='text-5xl font-bold'>{productDetail?.price}<span className='text-sm'>TL</span></div>
            <div className='flex items-center gap-5 my-4'>
                <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
                <input className='text-center w-5 text-4xl font-bold' type="text"value={quantity} />
                <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
            </div>
            <div onClick={addCart}  className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>
        </div>
    </div>
  )
}
