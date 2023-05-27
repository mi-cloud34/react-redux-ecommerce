import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComponent from '../components/cart/CartComponent';

function Cart() {
    const dispatch=useDispatch();
  const {carts, itemCount,totalAmount}=useSelector(state=>state.carts);
  const navigate=useNavigate();
  console.log("cartsss",carts);
  useEffect(()=>{
  dispatch(getCartTotal())
  },[dispatch]);
  return (
    <div>{carts?.length>0?<div>
        {
            carts.map((cart,i)=>(
               <CartComponent key={i} cart={cart} />
            ))
        } <div className='flex items-center justify-end '> Toplam Tutar:<span className='font-bold text-3xl ml-2'>{totalAmount}</span></div>
    </div>:<div>Kartınız boş.....</div>}</div>
  )
}

export default Cart