import React from 'react'

const CheckChildren=(props) =>{
    console.log(props.children)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default CheckChildren
