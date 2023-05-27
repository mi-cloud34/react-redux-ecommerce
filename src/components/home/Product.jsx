import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductCategory } from '../../redux/productSlice';
import Loading from '../loading/loading';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';

export default function Product({category,sort}) {
  const dispatch= useDispatch()
  const { products,productStatus}=useSelector(state=>state.products);
  console.log("products",products);
  useEffect(()=>{
    if (category) {
      dispatch(getProductCategory(category))
    }
dispatch(getProduct())

  },[dispatch,category]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading products from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(  products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <>
      {
      productStatus=='LOADİNG'?<Loading item="Product"/>:<div className='flex flex-wrap'>
        {
          currentItems?.sort((a,b)=>sort=='inc'?a.price-b.price:sort=='dec'?b.price-a.price:null).map((product,i)=>(
            <ProductCard key={i} product={product}/>
          ))
        }
      </div>
      }
      <ReactPaginate
      className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      </>
      </div>
  )
}
