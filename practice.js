import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {

    const [toggle, setToggle] = useState(true)

    function handleClick() {
        setToggle(!toggle)
    }

    return (

        <>
            {toggle === true ?
                <>
                    <button>ON</button>
                </>
                :
                <>
                    <button>OFF</button>
                </>
            }
        </>
    );
}
