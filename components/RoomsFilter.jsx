'use client'

import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'
import Counter from './Counter'



export default function RoomsFilter({ minPrice, maxPrice, setRooms }) {

  async function submitHandler(e) {
    e.preventDefault()
    const resp = await fetch('/api/rooms/getRooms', {
      method: 'POST',
      body: JSON.stringify({
        price: price,
        guests: guests
      })
    })
    const result = await resp.json()
    console.log(result);
    setRooms(result)

  }
  const [price, setPrice] = useState(maxPrice)
  const [guests, setGuests] = useState(1)

  return (
    <form onSubmit={submitHandler} className=' container w-full flex items-center justify-between mb-20 mt-20'>
      <div className="w-1/3">
        <p>Цена &lt; чем - {price}$</p>
        <p>от {minPrice}$ до {maxPrice}$</p>
        <Slider
          onValueChange={(e) => { setPrice(e[0]) }}
          defaultValue={[maxPrice]}
          max={maxPrice}
          min={minPrice}
          step={1} />
      </div>
      <div className="w-1/3">
        <p>Гостей</p>
        <Counter setGuests={setGuests} guests={guests} />
      </div>
      <button className='p-3 border'>Искать</button>

    </form>
  )
}