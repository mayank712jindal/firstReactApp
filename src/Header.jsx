import React from 'react'
import "./Header.css"

const Header = () => {
    const ary = [
        {
            id: 1,
            name: "Mayank"
        },
        {
            id: 2,
            name: "Aaryan"
        }
    ]
    return (
        <div>
            <h1 className="top">Hell </h1>
            {
                ary.map(item=>(
                    <div>
                    <h1>{item.id}</h1>
                    <h3>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Header
