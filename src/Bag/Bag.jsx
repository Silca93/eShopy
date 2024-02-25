import React from 'react'

export default function Bag({shop, items}) {
    // console.log(items);
    
  return (
    <div className='Bag'>
        <img src={shop} width="25px" height="25px" alt="" id='shop_bag'/>
    </div>
  )
}
