import React from 'react'

export default function Card({data, star}) {
  return (
    <div className="card w-[400px] h-[600px] bg-white-500">
      <div className="top w-full h-[10%] bg-[#403D39] flex justify-end items-center rounded-t-lg">
        <div className="cart w-[50px] h-[50px] bg-green-500 mr-2 text-center">
          Shopping cart
        </div>
      </div>
      <div className="mid w-full h-[50%] bg-gray-300  flex justify-center">
      <img src={data.produits[0].image} alt="" srcset="" />
      </div>
      <div className="bot w-full h-[40%] bg-[#403D39] rounded-b-lg">
        <div className="itemInfo w-full h-full flex flex-col justify-start px-4 gap-3">
          <h1 className="text-[20px] text-white font-[500] pt-1">{data.produits[0].name}</h1>
          <h1 className="text-[15px] text-white">{data.produits[0].description}</h1>
          <div className="rating flex justify-between items-center">
            <h1 className="text-[25px] text-white ">{data.produits[0].price + " €"}</h1>
            <p className="text-white flex items-center gap-2">{"Rating:  " + data.produits[0].rating} <img className="pb-2" src={star} alt="" width="25px" height="10px"/> </p>
          </div>
          <div className="buy w-[80%] h-[30%] flex justify-center items-center mb-1">
            <button className="hover:bg-white hover:border-black hover:text-black border-solid border-2 w-5/6 h-5/6 rounded-md ml-[60px] bg-black text-white">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}
