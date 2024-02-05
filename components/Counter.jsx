'use client'




export default function Counter({ maxGuest, setGuests, guests }) {


  let max_guest = 10
  if (maxGuest) {
    max_guest = maxGuest
  }

  return (

    <div>
      <div className="flex items-center justify-center gap-x-2">

        <button type="button" onClick={() => {
          if (guests > 1)
            setGuests(guests - 1)
        }}>-</button>

        <span>{guests}</span>

        <button type="button" onClick={() => {
          if (guests < max_guest)
            setGuests(guests + 1)
        }}>+</button>
      </div>

    </div>

  )
}