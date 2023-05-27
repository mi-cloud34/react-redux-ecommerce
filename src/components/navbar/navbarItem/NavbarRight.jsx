import React, { useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
export default function NavbarRight() {
  const dispatch=useDispatch();
  const {carts,itemCount}=useSelector(state=>state.carts);
  const navigate=useNavigate();
  console.log("cartsss",carts);
  useEffect(()=>{
  dispatch(getCartTotal())
  },[dispatch,itemCount]);
  return (
    <div className='flex items-center gap-6'>
    <div className='flex items-center rounded-full p-3 bg-gray-200 '>
        <input className='bg-gray-200' type="text" placeholder='arama yapınız ' />
        <BiSearch size={30}/>
    </div>
    <AiOutlineHeart size={30}/>
    <div onClick={()=>navigate("/cart")} className='relative'>
     <div className='absolute -top-3 -right-3 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center' >{carts?.length}</div>
     <SlBasket size={30}/>
    </div>
    </div>
  )
}
