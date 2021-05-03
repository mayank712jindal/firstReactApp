import React from 'react'

const Footer = ({name, age}) => {
    return (
        <div>
            <h1>this is footer {name} {age}</h1>

        </div>
    )
}

const LowerFooter = () => {
    return (
        <div>
            <h3>this is lower footer</h3>
        </div>
    )
}
export default Footer
export {LowerFooter}
