import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [barClick, setBarClick] = useState(false)
    const [closeClick, setCloseClick] = useState(true)
    const [imgView, setImgView] = useState(false)
    const [list, setList] = useState(false)


    // const barRef = useRef()
    // // const closeRef = useRef()
    // // const listRef = useRef()
    // const imgRef = useRef()


    const barHandler = () => {
        setBarClick(!barClick)
        setCloseClick(!closeClick)
        setImgView(!imgView)
        setList(!list)
        // barRef.current.classList.add("hidden")
        // closeRef.current.classList.remove("hidden")
        // imgRef.current.classList.add('translate-x-[10rem]')
    }

    const closeHandler = () => {
        setBarClick(!barClick)
        setCloseClick(!closeClick)
        setImgView(!imgView)
        // closeRef.current.classList.add("hidden")
    }
    // const barHandler = () => {
    //     const list = document.getElementById('list')
    //     const bar = document.getElementById('bar')
    //     const close = document.getElementById('close')
    //     const img = document.getElementById('img')
    //     bar.classList.add('hidden')
    //     close.classList.remove('hidden')
    //     list.classList.remove('hidden')
    //     img.classList.add('translate-x-[10rem]')

    // }

    // const closeHandler = () => {
    //     const bar = document.getElementById('bar')
    //     const close = document.getElementById('close')
    //     const img = document.getElementById('img')
    //     bar.classList.remove('hidden')
    //     close.classList.add('hidden')
    //     img.classList.remove('translate-x-[10rem]')

    // }



    return (
        <nav>
            <section>
                <figure className='absolute z-10 top-0 left-0 w-full' >
                    <img id='img' className={`w-full object-cover transition ease-in-out delay-[15ms] duration-[850ms] ${imgView ? " translate-x-[10rem] " : ""}`} src="./bunaken.png" alt="" />
                </figure>
                <section className=' relative z-20 flex justify-end top-12 right-20 cursor-pointer '>
                    <FontAwesomeIcon id='bar' onClick={barHandler} className={`text-white h-6 ${barClick ? 'hidden' : 'visible'} `} icon={faBars} />
                </section>
                <section className=' relative z-20 flex justify-end top-12 right-20 cursor-pointer'>
                    <FontAwesomeIcon onClick={closeHandler} className={` text-white h-6 ${ closeClick ? "hidden" : "visible" } `} icon={faXmark} />
                </section>
            </section>
            <section id='list' className={`h-full w-32 py-10 px-8 absolute top-0 bg-white`}>
                <ul className='font-sans text-base'>
                    <li className='my-4'><a href="/#"> Home </a></li>
                    <li className='my-4'><a href="/#"> Services </a></li>
                    <li className='my-4'><a href="/#"> About </a></li>
                    <li className='my-4'><a href="/#"> Contact </a></li>
                    <li className='my-4'><a href="/#"> Sign in </a></li>
                    <li className='my-4'><a href="/#"> Sign up </a></li>
                </ul>
            </section>
        </nav>

    )
}

export default Navbar
