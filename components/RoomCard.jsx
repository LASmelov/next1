'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CounterRooms from './CounterRooms'
import RoomDops from './RoomDops'


export default function RoomCard({ name, peopleMax, price, address, }) {

    const [Smoking, setSmoking] = useState('')
    return (
        <div className=' flex items-center justify-center flex-col  border w-70 p-5 bg-gray-300 rounded-lgo'>

            <p>Название: {name}</p>
            <p>Макс. гостей:{peopleMax}</p>
            <p>Цена: {price} pублей</p>
            <p>Адрес: {address}</p>

            <div>
                <button className={`border py-3 px-4 ${Smoking === true ? 'bg-green-400' : null}`}
                    onClick={() => {
                        setSmoking(true)
                    }}
                >
                    Прокуренный
                </button>

                <button className={`border py-3 px-4 ${Smoking === false ? 'bg-green-400' : null}`}
                    onClick={() => {
                        setSmoking(false)
                    }}
                >
                    Не прокуренный
                </button>
            </div>
        </div>
    )
}
