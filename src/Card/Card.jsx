import React from 'react'
import { useEffect, useState } from 'react';

export default function Card({data, star, key, add, coeur, substract}) {

  // console.log(data.id);

  const [quantity, setQuantity] = useState(data.quantity);
  let decrementQty = () =>{

    if (quantity > 0) { setQuantity( (prevValue) => prevValue -1);}
  }

  // console.log(document.getElementById("addCart"));

  useEffect(() => {


    if(quantity == 0){
      // console.log("almost out of stock");
      // document.querySelector("#addCart").style = 
      document.getElementById("addCart").style.display = `none`;
    }
    // return () => {
    // };
  }, [quantity]);
  return (
    <div id={data.id} className="card w-[400px] h-[600px] bg-white-500 mx-5 mt-5">
      <div className="top w-full h-[10%] bg-[#403D39] flex justify-end items-center rounded-t-lg pr-5">
        <span className='text-white text-[2rem] mr-5'>{quantity}</span>
        <img src={coeur} alt="" width="25px" height="25px"/>
      </div>  
        
        <div className="mid w-full h-[50%] bg-white flex justify-center">
          <img src={data.image} alt="" srcset="" />
        </div>
      <div className="bot w-full h-[45%] bg-[#403D39] rounded-b-lg">
        <div className="itemInfo w-full h-full flex flex-col justify-start px-4 gap-3">
          <h1 className="text-[25px] text-white font-[500] pt-1">{data.name}</h1>
          <h1 className="text-[15px] text-white">{data.description}</h1>
          <div className="rating flex justify-between items-center">
            <h1 className="text-[25px] text-white ">{data.price + " €"}</h1>
            <p className="text-white flex items-center gap-2">{"Rating:  " + data.rating} <img className="pb-2" src={star} alt="" width="20px" height="10px"/> </p>
          </div>
          
          <div className="buy w-[80%] h-[2.5rem] flex justify-center items-center mb-1 absolute bottom-2">
            <button onClick={() => {add(data.price), substract(data.price), decrementQty()}} className="hover:bg-white hover:border-black hover:text-black border-solid border-2 w-5/6 h-full rounded-md ml-[60px] bg-black text-white" id='addCart'> {quantity > 1 ? "ADD TO CART" : "ONLY ONE LEFT"}</button>
          </div>
        </div>
        
      </div>
    </div>
 )
}

{/* <div className="card w-[400px] h-[600px] bg-white-500">
  <div className="top w-full h-[10%] bg-[#403D39] flex justify-end items-center rounded-t-lg">
  </div>  

  <div className="main-container w-full h-[70%] bg-yellow-600 flex flex-col justify-center items-center">
    <div className="mid w-[90%] h-[full] bg-green-400 flex justify-center">
      <img src={data.produits[0].image} alt="" srcset="" />
    </div>
    <div className="bot w-[90%] h-[full%] bg-[#403D39] rounded-b-lg">
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
</div> */}

 