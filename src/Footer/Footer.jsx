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

    <div className="footer w-full h-[52rem]  mb-[40dvh] 
    
                    min-[1440px]:h-[20rem] 

                    min-[1024px]:max-[1439px]:h-[17rem] min-[1024px]:max-[1439px]:

                    min-[768px]:max-[1023px]:h-[19rem]  min-[768px]:max-[1023px]:bg-black

                    " >

      
       <div className="footer_box w-[98%] h-[90%] m-auto   rounded-[2.5rem] bg-[rgba(59,59,59,1)] flex flex-col justify-end 
                     
                     min-[1440px]:h-full  min-[1440px]:

                     min-[1024px]:max-[1439px]:h-full

                     min-[768px]:max-[1023px]:h-full
             ">

          <div className="inside_box w-[90%] h-[90%] mx-auto grid grid-cols-2 grid-rows-3 gap-2 
                          
                          min-[1440px]:grid-cols-6 min-[1440px]:grid-rows-1 min-[1440px]:items-center
                          
                          min-[1024px]:max-[1439px]:grid-cols-6  min-[1024px]:max-[1439px]:grid-rows-1 min-[1024px]:max-[1439px]:items-center


                          min-[768px]:max-[1023px]:grid-cols-3 min-[768px]:max-[1023px]:grid-rows-2
                          min-[768px]:max-[1023px]:gap-y-[1.2rem]


                          ">

                                    {/* who we are area start  */}

              <div className="row-start-1  flex flex-col h-full w-full
                        
                        min-[1440px]: min-[1440px]:row-start-1 min-[1440px]:
                        
                        min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:


                        min-[768px]:max-[1023px]:row-start-1


                        

                        ">

                  <div className="title_box w-full h-[20%]  flex items-center relative 
                  
                                  min-[1440px]:w-10/12  min-[1440px]:
                                  
                                  min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:w-full

                                  ">

                    <h2 className='text-[1.1rem] font-medium text-white text-start inline-block 
                                    min-[1440px]:text-[1.5rem]  min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]

                                    min-[1024px]:max-[1439px]:text-[1.1rem]

                                    min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem] 

                                    '>Who We Are ?</h2>
                    <span class="absolute bottom-[0.4rem] left-0 w-[2.2rem] h-[0.12rem] 
                                
                                bg-white

                                min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.10rem]
                                "></span>

                  </div> 

                  <div className="text_content w-full h-[80%]">

                    <ul className='h-full w-full  flex flex-col gap-3 text-start justify-evenly '>

                      <li className=''>
                        
                        <a href="#">
                            <p className='text-[1.1rem] text-white

                                          min-[1440px]:text-[1.2rem]

                                          

                                          min-[768px]:max-[1023px]:mt-[0.7rem]
                                          min-[768px]:max-[1023px]:text-[1.3rem]
                                 '>Who We Are ?</p>

                        </a>

                      </li>

                      <li className=''>
                        
                        <a href="#">
                        <p className=' text-[1.1rem] text-white

                                      min-[1440px]:text-[1.2rem]

                                      min-[768px]:max-[1023px]:text-[1.3rem]
                             '>Our Services</p>


                        </a>

                      </li>

                      <li className=''>
                        
                        <a href="#"> 

                          <p className='text-[1.1rem] text-white

                                        min-[1440px]:text-[1.2rem]

                                        min-[768px]:max-[1023px]:text-[1.3rem]
                               '>Contact Us</p>

                        </a>

                      </li>

                    </ul>

                  </div>

              </div>
                                {/* who we are area end  */}

                                {/* One question area start  */}


              <div className="row-start-1  flex flex-col h-full w-full items-center

                              min-[1440px]: min-[1440px]: 
                              
                              min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:
                              
                              
                              min-[768px]:max-[1023px]:row-start-1

                              min-[768px]:max-[1023px]:
                              " >

                  <div className="title_box w-2/3 h-[20%] flex items-center relative
                                
                                min-[1440px]: min-[1440px]:w-10/12 min-[1440px]:self-end
                                
                                min-[1024px]:max-[1439px]:w-full

                                min-[768px]:max-[1023px]: 
                                min-[768px]:max-[1023px]:w-full
                                
                                ">

                  <h2 className='text-[1.1rem] font-medium text-white text-start inline-block
                                
                                min-[1440px]:text-[1.5rem]  min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]

                                min-[1024px]:max-[1439px]:text-[1.2rem]

                                min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem] 

                                '>Have A Question ?</h2>
                    <span class="absolute bottom-[0.4rem] left-0 w-[2.5rem] h-[0.12rem]  bg-white

                                    min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.10rem]
                    "></span>
                  </div>

                  <div className="text_content w-full h-[80%] flex justify-end
                                  
                                  min-[1440px]: 
                                  
                                  min-[1024px]:max-[1439px]:justify-start

                                  min-[768px]:max-[1023px]:justify-start
                                  ">

                    <ul className='h-full w-5/6  flex flex-col gap-3 text-start justify-evenly 
                                  
                                  min-[1440px]: min-[1440px]:'>

                      <li className=''>

                        <a href="#">
                            <p className='text-[1.1rem] text-white 
                                          
                                          min-[1440px]:text-[1.2rem]

                                          min-[768px]:max-[1023px]:mt-[0.7rem]
                                          min-[768px]:max-[1023px]:text-[1.3rem]
                                          '>Help Section / FAQ</p>

                        </a>

                      </li>

                      <li className=''>

                        <a href="#">
                        <p className=' text-[1.1rem] text-white 
                                      
                                      min-[1440px]:text-[1.2rem]

                                      min-[768px]:max-[1023px]:text-[1.3rem]
                                      '>Payement, Deliveries</p>


                        </a>

                      </li>

                      <li className=''>

                        <a href="#"> 

                          <p className='text-[1.1rem] text-white 
                                        
                                        min-[1440px]:text-[1.2rem]

                                        min-[768px]:max-[1023px]:text-[1.3rem]
                                        '>CS, Request a Return</p>

                        </a>

                      </li>

                    </ul>

                  </div>

              </div>
                            {/* One question area end  */}

                            {/* information area start  */}

              <div className="row-start-2  flex flex-col h-full w-[106%]
              
                            min-[1440px] min-[1440px]:row-start-1 
                            
                            min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:


                            min-[768px]:max-[1023px]:row-start-1 

                            ">

                <div className="title_box w-full h-[20%] flex items-center relative
                
                                min-[1440px]: min-[1440px]:w-10/12 min-[1440px]:self-end
                                
                                min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:w-full
                                

                                min-[768px]:max-[1023px]:w-full

                                ">

                <h2 className='text-[1.1rem] font-medium text-white text-start inline-block 

                                min-[1440px]:text-[1.5rem] min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]


                                min-[1024px]:max-[1439px]:text-[1.2rem]

                                min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem] 

                '>Informations</h2>
                  <span class="absolute bottom-[0.4rem] left-0 w-[2.5rem] h-[0.12rem]
                    bg-white
                    
                    min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.10rem]
                    
                    "></span>

                </div>
                  
                <div className="text_content w-full h-[80%] 
                                
                                min-[1440px]: min-[1440px]:flex min-[1440px]:justify-end
                                
                                min-[1024px]:max-[1439px]:
                                
                                ">
                  
                  <ul className='h-full w-full  flex flex-col gap-3 text-start justify-evenly
                                
                                min-[1440px]: min-[1440px]:w-10/12 


                                min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:w-full
                                 
                                '>
                  
                    <li className=''>
                  
                      <a href="#">
                          <p className='text-[1.1rem] text-white 
                                              
                                      min-[1440px]:text-[1.2rem]  
                                      
                                      min-[768px]:max-[1023px]:mt-[0.7rem]
                                      min-[768px]:max-[1023px]:text-[1.3rem]
  
                            '>Site Map</p>
                  
                      </a>
                  
                    </li>
                  
                    <li className=''>
                  
                      <a href="#">
                      <p className=' text-[1.1rem] text-white 
                                              
                                      min-[1440px]:text-[1.2rem]    
                                      
                                      min-[768px]:max-[1023px]:text-[1.3rem]
  
                        '>General Terms and Conditions</p>
                  
                  
                      </a>
                  
                    </li>
                  
                    <li className=''>
                  
                      <a href="#"> 
                  
                        <p className='text-[1.1rem] text-white 
                                              
                                      min-[1440px]:text-[1.2rem]   
                                      
                                      min-[768px]:max-[1023px]:text-[1.3rem] 
  
                          '>Manage Your Cookies</p>
                  
                      </a>
                  
                    </li>
                  
                  </ul>
                  
                </div>

              </div>

                                          {/* information area end  */}

                                          {/* social media area start */}

              <div className="row-start-2  flex flex-col h-full w-full  items-center
                              min-[1440px]: min-[1440px]:row-start-1 
                              
                              min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:

                              min-[768px]:max-[1023px]:row-start-2

                              min-[768px]:max-[1023px]:

                              ">

                <div className="title_box w-2/3 h-[20%] flex items-center relative
                            
                            min-[1440px]: min-[1440px]:w-10/12 min-[1440px]:self-end
                            
                            min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:

                            min-[768px]:max-[1023px]:self-start

                            ">

                  <h2 className='text-[1.1rem] font-medium text-white text-start inline-block 

                                  min-[1440px]:text-[1.5rem] min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]


                                  min-[1024px]:max-[1439px]:text-[1.2rem]

                                  min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem] 


                  '>Social Media</h2>
                    <span class="absolute bottom-[0.4rem] left-0 w-[2.5rem] h-[0.12rem]  bg-white 
                    
                    min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.07rem]
                    "></span>

                </div>

                <div className="text_content w-full h-[80%]  flex ">

                  <ul className='h-1/2 w-1/2   grid grid-cols-2 grid-rows-2 gap-[0.6rem] mt-[1.8rem]  ml-[1.8rem]

                                min-[1024px]:max-[1439px]: 
                                min-[1024px]:max-[1439px]:h-2/5 min-[1024px]:max-[1439px]:w-3/5

                                min-[768px]:max-[1023px]:
                                min-[768px]:max-[1023px]:ml-0
                                min-[768px]:max-[1023px]:mt-[1rem]
                                min-[768px]:max-[1023px]:h-[50%] 
                                min-[768px]:max-[1023px]:w-[30%]
                                min-[768px]:max-[1023px]:gap-y-[1.5rem]

                  '>
                      <li className='row-start-1   flex flex-col 
                          
                          min-[1440px]:'>

                        
                        <a href="#">

                          <div className="box_media w-[2rem]  h-[2rem] 
                          
                                            min-[1440px]:w-[1.6rem]  min-[1440px]:h-[1.6rem]
                                            
                                            min-[1024px]:max-[1439px]:w-[1.4rem] 
                                            min-[1024px]:max-[1439px]:h-[1.4rem]


                                            min-[768px]:max-[1023px]:w-[1.4rem] 
                                            min-[768px]:max-[1023px]:h-[1.4rem]
                                            ">
                            <img src={INSTA} alt="" srcset="" />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-1  flex flex-col '>

                        
                        <a href="#">

                          <div className="box_media w-[2rem]  h-[2rem]
                                
                                min-[1440px]:w-[1.6rem]  min-[1440px]:h-[1.6rem]
                                
                                min-[1024px]:max-[1439px]:w-[1.4rem] 
                                min-[1024px]:max-[1439px]:h-[1.4rem]

                                min-[768px]:max-[1023px]:w-[1.4rem] 
                                min-[768px]:max-[1023px]:h-[1.4rem]
                                
                                ">
                            <img src={TWI} alt="" srcset="" />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-2  flex justify-end 
                      
                                    min-[1440px]:min-[1440px]:justify-start 
                                    
                                    min-[1024px]:max-[1439px]: 
                                    min-[1024px]:max-[1439px]:justify-start
                                          
                                    '>
                        
                        <a href="#">

                          <div className="box_media w-[2rem]  h-[2rem] flex 

                                          min-[1440px]:w-[1.9rem]  min-[1440px]:h-[1.9rem]  min-[1440px]:


                                          min-[1024px]:max-[1439px]:w-[1.6rem] 
                                          min-[1024px]:max-[1439px]:h-[1.6rem]
                                          min-[1024px]:max-[1439px]: 

                                          min-[768px]:max-[1023px]:w-[1.6rem] 
                                          min-[768px]:max-[1023px]:h-[1.6rem]
                            ">
                          <img src={FB} alt="" srcset="" className='' />

                          </div>


                        </a>

                      </li>

                      <li className='row-start-2 '>
                        
                        <a href="#">

                          <div className="box_media w-[2rem]  h-[2rem]
                          
                                            min-[1440px]:w-[1.9rem]  min-[1440px]:h-[1.9rem]

                                            min-[1024px]:max-[1439px]:w-[1.6rem] 
                                            min-[1024px]:max-[1439px]:h-[1.6rem]

                                            min-[768px]:max-[1023px]:w-[1.6rem] 
                                            min-[768px]:max-[1023px]:h-[1.6rem]
                          ">
                          <img src={TIC} alt="" srcset="" />

                          </div>


                        </a>

                      </li>

                  </ul>

                </div>

              </div>

                                          {/* social media area end */}

                                          {/* payment area start */}



              <div className="row-start-3 flex flex-col h-full w-[105%]
                                min-[1440px]: min-[1440px]:row-start-1 
                                
                                min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:
                                min-[1024px]:max-[1439px]:w-[120%]


                                min-[768px]:max-[1023px]:row-start-2

                                ">


                  <div className="title_box w-full h-[20%] flex items-center relative 
                  
                                  min-[1440px]: min-[1440px]:w-full min-[1440px]:
                                  
                                  min-[1024px]:max-[1439px]:

                                  ">

                    <h2 className='text-[1.1rem] font-medium text-white text-start inline-block 

                                    min-[1440px]:text-[1.5rem] min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]

                                    min-[1024px]:max-[1439px]:text-[1.2rem]

                                    min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem] 

                              '>Accepted Payment </h2>
                    <span class="absolute bottom-[0.4rem] left-0 w-[2.5rem] h-[0.12rem]  bg-white
                     
                     min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.07rem]
                     "></span>

                  </div>

                  <div className="text_content w-full h-[80%] ">

                    <ul className='h-1/2 w-5/6  grid grid-cols-3 grid-rows-2 mt-[1.8rem]
                    
                    
                                    min-[768px]:max-[1023px]:mt-[1rem]
                                    min-[768px]:max-[1023px]:gap-y-[1.5rem]
                                    min-[768px]:max-[1023px]:w-3/5

                    '>

                      <li className='row-start-1   flex flex-col  '>

                        
                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] 
                          
                          min-[1024px]:max-[1439px]:w-[1.5rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]


                          min-[768px]:max-[1023px]:w-[1.5rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          
                          ">
                            <img src={VISA} alt="" srcset="" className='w-full h-full' />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-1  flex flex-col  '>

                        
                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] 
                          
                          min-[1024px]:max-[1439px]:w-[1.5rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]

                          min-[768px]:max-[1023px]:w-[1.5rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          

                          ">
                          <img src={MCARD} alt="" srcset="" className='w-full h-full' />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-1  flex  '>
                        
                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] flex 
                          
                          min-[1024px]:max-[1439px]:w-[1.5rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]

                          min-[768px]:max-[1023px]:w-[1.5rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          
                          
                          ">
                          <img src={APPLEPAY} alt="" srcset="" className='w-full h-full' />

                          </div>


                        </a>

                      </li>

                      <li className='row-start-2  '>
                        
                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] 
                          
                          min-[1024px]:max-[1439px]:w-[1.5rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]


                          min-[768px]:max-[1023px]:w-[1.5rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          

                          ">
                          <img src={BANKTRANSFERT} alt="" srcset="" className='w-full h-full' />

                          </div>


                        </a>

                      </li>

                      <li className='row-start-2  '>
                        
                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] 
                          
                          min-[1024px]:max-[1439px]:w-[1.5rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]

                          min-[768px]:max-[1023px]:w-[1.5rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          
                          
                          ">
                          <img src={PAYPAL} alt="" srcset="" className='w-full h-full' />

                          </div>


                        </a>

                      </li>

                    </ul>

                  </div>

              </div>

                                                        {/* payment area end */}


                                                        {/* trasnporters area start */}


              <div className="row-start-3 flex flex-col  h-full w-full  items-center 
                                min-[1440px]: min-[1440px]:row-start-1
                                
                                min-[1024px]:max-[1439px]:row-start-1 min-[1024px]:max-[1439px]:

                                min-[768px]:max-[1023px]:row-start-2

                                ">

                <div className="title_box w-2/3 h-[20%] flex items-center relative 
                
                                min-[1440px]: min-[1440px]:w-10/12 min-[1440px]:self-end
                                

                                min-[1024px]:max-[1439px]:  
                                min-[1024px]:max-[1439px]:w-10/12
                                min-[1024px]:max-[1439px]:self-end

                                min-[768px]:max-[1023px]:self-start

                                ">

                  <h2 className='text-[1.1rem] font-medium text-white text-start inline-block 

                                  min-[1440px]:text-[1.5rem] min-[1440px]:font-normal min-[1440px]:tracking-[0.05rem]


                                  min-[1024px]:max-[1439px]:text-[1.2rem]

                                  min-[768px]:max-[1023px]:text-[1.3rem] min-[768px]:max-[1023px]:tracking-[0.07rem]

                    '>Our Transporters</h2>
                  <span class="absolute bottom-[0.4rem] left-0 w-[2.5rem] h-[0.12rem]  bg-white
                  
                                min-[768px]:max-[1023px]:bottom-[0.1rem] min-[768px]:max-[1023px]:h-[0.07rem]
                  "></span>

                </div>

                  <div className="text_content w-full h-[80%]  flex justify-end
                                  
                                  min-[768px]:max-[1023px]:justify-start
                                  

                                    ">

                    <ul className='h-1/2 w-5/6  grid grid-cols-3 grid-rows-2 mt-[1.8rem]

                                    
                                    min-[768px]:max-[1023px]:mt-[1rem]
                                    
                                    min-[768px]:max-[1023px]:gap-y-[1.5rem]

                                    min-[768px]:max-[1023px]:h-2/5 min-[768px]:max-[1023px]:w-3/5 

                    '>

                      <li className='row-start-1   flex flex-col  '>


                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] bg-white
                          
                          min-[1024px]:max-[1439px]:w-[1.7rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]
                          min-[1024px]:max-[1439px]:rounded-[0.2rem]


                          min-[768px]:max-[1023px]:w-[1.7rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          min-[768px]:max-[1023px]:rounded-[0.2rem]
                          
                          ">
                            <img src={BPOST} alt="" srcset="" className='w-full h-full' />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-1  flex flex-col  '>


                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] bg-white flex justify-center 
                          
                          min-[1024px]:max-[1439px]:w-[1.7rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]
                          min-[1024px]:max-[1439px]:rounded-[0.2rem]

                          
                          min-[768px]:max-[1023px]:w-[1.7rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          min-[768px]:max-[1023px]:rounded-[0.2rem]
                          
                          ">
                          <img src={FEDEX} alt="" srcset="" className='w-3/4 h-full' />
                          </div>


                        </a>

                      </li>

                      <li className='row-start-1  flex  '>

                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem]  bg-white flex justify-center 
                          
                          min-[1024px]:max-[1439px]:w-[1.7rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]
                          min-[1024px]:max-[1439px]:rounded-[0.2rem]

                          
                          min-[768px]:max-[1023px]:w-[1.7rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          min-[768px]:max-[1023px]:rounded-[0.2rem]
                          
                          ">
                          <img src={POSTNL} alt="" srcset="" className='w-2/3 h-full' />

                          </div>


                        </a>

                      </li>

                      <li className='row-start-2  '>

                        <a href="#">

                          <div className="box_media w-[2rem] rounded-[0.3rem]  h-[1.4rem] bg-white flex justify-center 
                          
                          min-[1024px]:max-[1439px]:w-[1.7rem] 
                          min-[1024px]:max-[1439px]:h-[1.1rem]
                          min-[1024px]:max-[1439px]:rounded-[0.2rem]

                          
                          min-[768px]:max-[1023px]:w-[1.7rem] 
                          min-[768px]:max-[1023px]:h-[1.1rem]
                          min-[768px]:max-[1023px]:rounded-[0.2rem]

                          ">
                          <img src={UPS} alt="" srcset="" className=' w-1/2 h-full' />

                          </div>


                        </a>

                      </li>

   

                    </ul>

                  </div>

              </div>      

    

          </div>

       </div>


    </div>
  )
}
