'use client'

import { useState } from 'react'

export default function CounterRooms({ MaxGuests }) {
    let max_guests = 20
    if (MaxGuests) {
        max_guests = MaxGuests
    }
    const [count, setCount] = useState(1)

    return (
        <div>
            <span onClick={() => {
                if (count > 1) {
                    setCount(prev => prev - 1)
                }
            }}>-</span>

            <span>{count}</span>

            <span onClick={() => {
                if (count < max_guests)
                    setCount(count + 1)

            }}>+</span>
        </div>
    )
}
