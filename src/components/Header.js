import React from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa"
import { IconContext } from "react-icons"
const Header = () => {
    return (
        <IconContext.Provider value={{ style: { fontSize: '60px', color: "rgb(0, 123, 255)" } }}>
            <div>
                <h1>
                    <FaMoneyCheckAlt /> Expense Tracker</h1>

            </div>

        </IconContext.Provider>
    )
}


export default Header;