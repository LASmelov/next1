'use client'



import { useState } from 'react'
import RoomCard from '@/components/RoomCard'
import RoomsFilter from '@/components/RoomsFilter'




export default function RoomListFilter({ rooms, MinMax, }) {

    // const rooms = await getRooms()
    // const MinMax = await getminmaxprice()

    const [Rooms, setRooms] = useState(rooms)

    return (
        <div className=' flex-wrap flex container mx-auto p-5 w-800'>
            <RoomsFilter setRooms={setRooms} minPrice={MinMax._min.price} maxPrice={MinMax._max.price} />
            {
                Rooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        name={room.name}
                        peopleMax={room.peopleMax}
                        address={room.address}
                        price={room.price}

                    />
                ))
            }

        </div>
    )

}
