import React from 'react'

export default function Card(props) {
  return (
    <div className="card w-[400px] h-[600px] bg-red-500">
      <div className="top w-full h-[10%] bg-blue-500 flex justify-end items-center">
        <div className="cart w-[50px] h-[50px] bg-green-500 mr-2 text-center">
          Shopping cart
        </div>
      </div>
      <div className="mid w-full h-[60%] bg-yellow-400">
        
      </div>
      <div className="bot w-full h-[30%] bg-purple-400">

      </div>
        

    </div>
  )
}
