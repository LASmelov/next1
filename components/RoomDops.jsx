'use client'


import React, { useState } from 'react'

export default function RoomDops() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show)
                }}>

                {show ? 'показать допы' : 'Показать инфо'}
            </button>

            {show && <ul>

                <li>Кондиционер</li>
                <li>Плита</li>
                <li>Холодильник</li>
                <li>Тумбочка</li>
                <li>Шкаф</li>
                <li>Мини-бар</li>

            </ul>}

        </div>
    )
}
