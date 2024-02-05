import React from 'react'

export default async function getRooms() {
    const response = await fetch("http://localhost:1000/rooms")


    return response.json()
}
