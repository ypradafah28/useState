import React from 'react'
import { useState, useEffect } from 'react'
import Toogle from './toogle'


function Body() {
    const [toogle, setToogle] = useState(true)
    
    const handleToogle = () => {
        setToogle(!toogle)
    }
    return (
        <div>
            <Toogle toogle={toogle} onToogle={handleToogle} />
        </div>
    )
}

export default Body
