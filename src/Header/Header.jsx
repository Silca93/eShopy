import React from 'react'

export default function Header({logo}) {
  return (
    <div className="w-full h-[200px] flex justify-center items-start">
        <img src={logo} alt="" width="300px" />

    </div>
  )
}
