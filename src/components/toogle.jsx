import React, { useEffect, useState, useRef } from 'react'

function Toogle({ toogle, onToogle }) {
    // const [title, setTitle] = useState('Hello ReactJS')
    const didMount = useRef(false)

    useEffect(() => {
        if (didMount.current) {
            console.log("jalan ketika toogle berubah")
        } else {
            didMount.current = true
        }
    }, [toogle])

    // const handleChange = (event) => {
    //     setTitle(event.target.value)
    // }
    return (
        <div>
            {/* <input type="text" value={title} onChange={handleChange} /> */}
            <button className='bg-violet-700 text-white px-5 py-2 rounded-md m-5' type='button' onClick={onToogle}>Toogle</button>
            {toogle && <div>Hello react</div>}
        </div>
    )
}

export default Toogle
