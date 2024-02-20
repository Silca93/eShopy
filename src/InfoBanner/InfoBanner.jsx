import React from 'react'
import DOLLAR from "../assets/images/dollar.png"
import QUALITY from "../assets/images/verifie.png"
import SECURITY from "../assets/images/bouclier-de-securite.png"
import DELIVERY from "../assets/images/livraison-rapide.png"

export default function InfoBanner() {
  return (
    <div className='info_banner w-full h-[8rem]  flex justify-center mb-[4rem]'>

        <div className="info_banner_box w-[98%] h-full flex justify-center items-center bg-[rgb(217,217,217)] rounded-[1.5rem]">

            <div className="info_banner_box_inside w-[90%] h-[40%]  flex flex-row ">

                <ul className='w-full h-full flex '>


                    <li className='h-full w-1/4  '>

                        <div className="box_info h-full w-full  flex">

                            <div className="left h-full w-1/4  flex items-center justify-center">
                                <img src={DELIVERY}  alt="" srcset="" />

                            </div>

                            <div className="right h-full w-3/4  flex items-center ">

                                <p className=' text-[1.3rem] ml-4'>Free Shipping and Returns</p>

                            </div>
                        </div>

                    </li>

                    <li className='h-full w-1/4   flex justify-end'>

                        <div className="box_info h-full w-full  flex">

                            <div className="left h-full w-1/4  flex items-center justify-center">
                                
                                <img src={DOLLAR} className='w-1/2 ' alt="" srcset="" />

                            </div>

                            <div className="right h-full w-3/4  flex items-center">

                                <p className=' text-[1.3rem]'>100% Money Back Guaranteed</p>


                            </div>
                        </div>

                    </li>

                    <li className='h-full w-1/4   flex justify-end'>

                        <div className="box_info h-full w-full  flex">

                            <div className="left h-full w-1/4  flex items-center justify-center">
                                
                                <img src={QUALITY} className='w-1/2 ' alt="" srcset="" />

                            </div>

                            <div className="right h-full w-3/4 flex items-center">

                                <p className=' text-[1.3rem]'>High Quality Items</p>


                            </div>
                        </div>

                    </li>

                    <li className='h-full w-1/4   flex justify-end'>

                        <div className="box_info h-full w-full  flex">

                            <div className="left h-full w-1/4  flex items-center justify-center">
                                
                                <img src={SECURITY} className='w-1/2 ' alt="" srcset="" />

                            </div>

                            <div className="right h-full w-3/4 flex items-center ">

                                <p className=' text-[1.3rem]'>Safe and Secure Checkout</p>


                            </div>
                        </div>

                    </li>

                </ul>

            </div>
        </div>


    </div>

  )
}
