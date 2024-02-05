'use client'

import React, { useState } from 'react'

export default function FromTwo({ searchParams }) {

    const [name, setName] = useState('')
    const [comments, setComments] = useState('')

    async function handleClick(e) {
        e.preventDefault()

        const resp = await fetch('/api/testTwo', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                comments: comments
            })
        })


    }

    console.log(searchParams.age)
    return (
        <form className='w-2/3 mx-auto border p-5 border-red-700'>
            <h2 className='text-center text-3xl fcont-bold mb-5'>Оставьте комментарий:</h2>
            <div className='flex justify-center gap-x-16'>
                <p className='font-medium text-lg'>{searchParams.name}</p>
                <p className='font-medium text-lg'>{searchParams.price} ₽</p>
            </div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}

                className="w-2/3 mx-auto block mb-5 p-3 border" type='text' placeholder="Ваше имя" />
            <input
                value={comments}
                onChange={(e) => setСomments(e.target.value)}

                className="w-2/3 mx-auto block mb-5 p-3 border" type='tel' placeholder="Ваш комментарий" />
            <div className='text-center'>
                <button onClick={handleClick} className='border py-2 px-4'>Отправить</button>
            </div>

        </form>
    )
}