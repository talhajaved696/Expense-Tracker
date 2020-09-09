import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'
import Item from '../components/Item'
export default function Transaction() {
    const { transactions } = useContext(GlobalContext)


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Item key={transaction.id} transaction={transaction} />))}

            </ul>
        </>
    )
}
