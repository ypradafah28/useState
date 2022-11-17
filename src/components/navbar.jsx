import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faListNumeric, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    // const [barClick, setBarClick] = useState(false)
    // const [closeClick, setCloseClick] = useState(true)
    // const [imgView, setImgView] = useState(false)
    // const [list, setList] = useState(true)

    
    // const barHandler = () => {
    //     setBarClick(!barClick)
    //     setCloseClick(!closeClick)
    //     setImgView(!imgView)
    //     setList(false)
    // }

    // const closeHandler = () => {

    //     setBarClick(!barClick)
    //     setCloseClick(!closeClick)
    //     setImgView(!imgView)
    // }


    // return (
    //     <nav>
    //         <section className='h-full'>
    //             <figure className='absolute z-10 top-0 left-0 w-full' >
    //                 <img id='img' className={`w-full transition ease-in-out delay-[15ms] duration-[850ms] ${imgView ? " translate-x-[10rem] " : ""}`} src="./bunaken.png" alt="" />
    //             </figure>
    //             <section className=' relative z-20 flex justify-end top-12 right-20 cursor-pointer '>
    //                 <FontAwesomeIcon id='bar' onClick={barHandler} className={`text-white h-6 ${barClick ? 'hidden' : 'visible'} `} icon={faBars} />
    //             </section>
    //             <section className=' relative z-20 flex justify-end top-12 right-20 cursor-pointer'>
    //                 <FontAwesomeIcon onClick={closeHandler} className={` text-white h-6 ${closeClick ? "hidden" : "visible"} `} icon={faXmark} />
    //             </section>
    //         </section>
    //         <section id='list' className={`h-full w-32 py-10 z-0 px-8 absolute top-0 bg-white ${list ? "hidden" : ""}`}>
    //             <ul className='font-sans text-base'>
    //                 <li className='my-4'><a href="/#"> Home </a></li>
    //                 <li className='my-4'><a href="/#"> Services </a></li>
    //                 <li className='my-4'><a href="/#"> About </a></li>
    //                 <li className='my-4'><a href="/#"> Contact </a></li>
    //                 <li className='my-4'><a href="/#"> Sign in </a></li>
    //                 <li className='my-4'><a href="/#"> Sign up </a></li>
    //             </ul>
    //         </section>
    //     </nav>

    // )
}

export default Navbar
