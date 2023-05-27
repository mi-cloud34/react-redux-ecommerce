import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../redux/productSlice';
import Loading from '../components/loading/loading';
import DetailComponent from '../components/detail/DetailComponent';

export default function ProductDetail() {
    const {id}=useParams()
    const dispatch=useDispatch();
    const {productDetail,productDetailStatus}=useSelector(state=>state.products)
    useEffect(()=>{
        dispatch(getProductDetail(id))
    },[dispatch,id]);
  return (
    <div>{productDetailStatus=='LOADİNG'?<Loading/>:<DetailComponent productDetail={productDetail}/>}</div>
  )
}
