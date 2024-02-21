import React from 'react'
import FB from "../assets/images/facebook.png"
import INSTA from "../assets/images/instagram.png"
import TWI from "../assets/images/twitter.png"
import TIC from "../assets/images/tic-tac.png"

import VISA from "../assets/images/card_visa.png"
import MCARD from "../assets/images/card_mastercard.png"
import APPLEPAY from "../assets/images/apple-paie.png"
import BANKTRANSFERT from "../assets/images/bank-transfer.png"
import PAYPAL from "../assets/images/paypal.png"

import FEDEX from "../assets/images/fedex.png"
import POSTNL from "../assets/images/postnl.png"
import UPS from "../assets/images/ups.png"
import BPOST from "../assets/images/bpost-logo-group.png"

import "../Footer/Footer.css"

export default function Footer() {
  return (
    <div className="footer_ w-full h-[17rem]  flex justify-center mb-[7rem] text-white">

      <div className="footer_box w-[98%] h-full flex justify-center items-end bg-[rgb(59,59,59)] rounded-[15px] ">

        <div className="footer_box_inside w-[94%] h-[80%]  flex flex-row">

          <ul className='h-full w-full flex '>
            
            <li className="little_box h-full w-1/6 flex justify-start  
            max-[425px]:w-full max-[425px]:h-1/2 max-[425px]:bg-slate-400">

              <div className="box_li h-full w-[70%] flex flex-col ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem] 
                    max-[425px]:text-[1rem] 
                    max-[425px]:  '>Who are we?</span>
                </div>

                <div className="text_box w-full h-[75%] 
                max-[425px]:flex-col ">
                    <ul className='leading-[2.4rem] 
                    max-[425px]:text-[1rem] max-[425px]:flex max-[425px]:flex-col
                    max-[425px]:h-full max-[425px]: max-[425px]:bg-green-400 max-[425px]:w-[100%]'>

                      <li className='max-[425px]:bg-red-700 max-[425px]:w-full max-[425px]:h-1/2'>

                        <a href="#" className="text-[1.2rem]  ">Who are we?</a>

                        </li>

                      <li className='max-[425px]:bg-red-400'>

                        <a href="#" className="text-[1.2rem]">Our Services</a>

                        </li>

                      <li>

                        <a href="#" className="text-[1.2rem]">Contact Us</a>

                        </li>

                    </ul>
                </div>

              </div>

            </li>

            
            <li className="little_box h-full w-1/6  flex justify-start 
            max-[425px]:w-full max-[425px]:bg-amber-800 ">

              <div className="box_li h-full w-[70%] flex flex-col ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem]'>Have a Question ?</span>
                </div>

                <div className="text_box w-full h-[75%] ">
                    <ul className='leading-[2.4rem]'>
                      <li>

                        <a href="#" className="text-[1.2rem]">Help Section / FAQ</a>

                        </li>

                      <li>

                        <a href="#" className="text-[1.2rem]">Payement, Deliveries</a>

                        </li>

                      <li>

                        <a href="#" className="text-[1.2rem]">CS, Request a Return</a>

                        </li>

                    </ul>
                </div>

              </div>

            </li>


            {/* Informations part start*/}

            
            <li className="little_box h-full w-1/6  flex justify-start 
            max-[425px]:w-full max-[425px]:bg-black ">

              <div className="box_li h-full w-[80%] flex flex-col  ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem]'>Informations</span>
                </div>

                <div className="text_box w-full h-[75%] ">
                    <ul className='leading-[2.4rem]'>
                      <li>

                        <a href="#" className="text-[1.2rem]">Site Map</a>

                        </li>

                      <li>

                        <a href="#" className="text-[1.2rem]">General Terms and Conditions</a>

                        </li>

                      <li>

                        <a href="#" className="text-[1.2rem]">Manage Your Cookies</a>

                        </li>

                    </ul>
                </div>

              </div>

            </li>


            {/* Informations part end*/}

            {/* reseau sociaux part start */}
            <li className="little_box h-full w-1/6  flex justify-start max-[425px]:w-1/3 max-[425px]:bg-black">

              <div className="box_li h-full w-[70%] flex flex-col ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem]'>Social Media</span>
                </div>

                <div className="text_box w-full h-[75%]  flex flex-col">

                    <ul className='h-[68%] w-[85%]  flex flex-col justify-between'>

                      <li className='w-full h-[44%]  flex justify-between items-end'>


                          <li className='w-[40%]  h-[85%]'>

                            <a href="#">
                              <img src={INSTA} className='w-[60%]' alt="" srcset="" />
                            </a>

                          </li>

                          <li className='w-[40%]  h-[84%]'>

                            <a href="#">
                              <img src={TWI} className='w-[60%]' alt="" srcset="" />
                            </a>

                          </li>


                      </li>

                      <li className='w-full h-[44%]  flex justify-between '>


                        <li className='w-[40%]  h-[85%] flex justify-between items-end'>

                            <a href="#">
                              <img src={FB} className='w-[60%]' alt="" srcset="" />
                            </a>

                        </li>

                        <li className='w-[40%]  h-[84%] flex justify-between items-end'>

                          <a href="#">
                            <img src={TIC} className='w-[60%]' alt="" srcset="" />
                          </a>

                        </li>

                      </li>



                    </ul>
                </div>

              </div>

            </li>

            {/* reseau sociaux part end*/}


            {/* moyen de paiement part start*/}

            <li className="little_box h-full w-1/6  flex justify-start 
            max-[425px]:w-1/3 max-[425px]:bg-black ">

              <div className="box_li h-full w-[85%] flex flex-col  ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem]'>Accepted Payment Methods</span>
                </div>

                <div className="text_box w-full h-[75%] ">
                    <ul className=' w-[90%] h-[68%] flex flex-col justify-between'>
                      <li className='w-full  h-[44%] gap-2 flex items-end'>

                          <li className='flex-auto  h-[85%]' >

                            <a href="#">
                                <img src={VISA} className='w-[80%]' alt="" srcset="" />
                            </a>

                          </li>

                          <li className='flex-auto  h-[85%] ' >

                            <a href="#">
                              <img src={MCARD} className='w-[80%]' alt="" srcset="" />
                            </a>

                          </li>

                          <li className='flex-auto  h-[85%] flex flex-col justify-start' >

                            <a href="#">
                            <img src={APPLEPAY} className='w-[80%]' alt="" srcset="" />

                            </a>

                          </li>



                      </li>

                      <li className='w-full  h-[44%] gap-2 flex items-end'>

                      <li className=' w-[30%]  h-[85%]' >

                          <a href="#">
                              <img src={BANKTRANSFERT} className='w-[80%]' alt="" srcset="" />
                          </a>
                            
                          </li>
                            
                          <li className=' w-[30%]  h-[85%] ' >
                            
                          <a href="#">
                            <img src={PAYPAL} className='w-[80%] h-[74%]' alt="" srcset="" />
                          </a>
                            
                          </li>


                      </li>

                    </ul>
                </div>

              </div>

            </li>

            {/* moyen de paiement part end*/}

            {/* Nos transporteurs part start*/}

            <li className="little_box h-full w-1/6  flex justify-end max-[425px]:w-1/3 max-[425px]:bg-black">

              <div className="box_li h-full w-[78%] flex flex-col ">

                <div className="title_box w-full h-[25%] ">
                    <span className='text-[1.3rem]'>Our Transporters</span>
                </div>

                <div className="text_box w-full h-[75%] ">
                    <ul className=' w-full h-[66%] flex flex-col justify-between'>

                      {/* first line start*/}
                      <li className='w-full h-[44%]  flex gap-3'>


                        <li className='h-[80%] w-[33%]  flex items-center '>

                          <a href="#" 
                            className="boxT w-full rounded-[3px] bg-white h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${BPOST})`}}>

                          </a>

                        </li>

                        <li className='h-[80%]  w-[33%] flex items-center '>
 
                          <a href="#" 
                            className="boxT w-full rounded-[3px] bg-white h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${FEDEX})`}}>

                          </a>

                        </li>

                        <li className='h-[80%]  w-[33%]  flex items-center'>
                          
                            <a href="#" 
                            className="boxT w-full rounded-[3px] bg-white h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${POSTNL})`}}>

                            </a>

                        </li>


                      </li>

                      {/* first line end*/}


                      <li className='w-full h-[44%]  flex gap-3'>

                        <li className='h-[80%] w-[29%]  flex items-center '>
    
                            <a href="#" 
                              className="boxT w-full rounded-[3px] bg-white h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${UPS})`}}>
                              
                            </a>
                              
                        </li>
                              
                      </li>

                    </ul>
                </div>

              </div>

            </li>

          </ul>


          
        </div>


      </div>
      
    </div>
  )
}
