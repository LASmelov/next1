

import React from 'react'
// import getRooms from '@/libs/getRooms'
import RoomCard from '@/components/RoomCard'
import { PrismaClient } from '@prisma/client'
import RoomsFilter from '@/components/RoomsFilter'
import RoomListFilter from '@/components/RoomListFilter'

const client = new PrismaClient()
async function getRooms() {


    return await client.rooms.findMany({
        select: {
            id: true,
            name: true,
            peopleMax: true,
            address: true,
            price: true
        }
    }
    )
}

async function getminmaxprice() {
    const min = await client.rooms.aggregate({
        _min: {
            price: true
        },

        _max: {
            price: true
        }
    })

    return min
}

export default async function RoomsPage() {

    const rooms = await getRooms()
    const MinMax = await getminmaxprice()



    return <RoomListFilter rooms={rooms} MinMax={MinMax} />

}
