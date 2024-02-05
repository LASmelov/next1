
import React from 'react'

export default function Requestpage({ SearchParams }) {
    return (
        <form className='w-2/3 mx-auto '>
            <h2 className='text-center text-3x1 font-bold mb-5'>Вы заказали</h2>
            <div className='flex justify-center gap-x-16 mb-10'>
                <p className='font-medium text-lg'>{SearchParams.name}</p>
                <p className='font-medium text-lg'>{SearchParams.price} рублей</p>
            </div>

            <input className="w-2/3 mx-auto block mb-5 p-3 border" type="text" placeholder='Выше имя' />
            <input type="text" placeholder='Выше телефон' />


            <button>Отправить</button>
        </form>
    )
}