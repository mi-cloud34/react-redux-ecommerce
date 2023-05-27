import React from 'react'

export default function Sorting({setSort}) {
  return (
    <div className='bg-gray-100 my-5 py-5 flex items-center justify-end'>
        <select onChange={(e)=>setSort(e.target.value)} className='bg-gray-100 py-5 px-5 text-lg' name="" id="">
            <option disabled >Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}
