'use client'
import {useState} from "react"

export default function UserName({ username }) {
    
    const [UserName, setUserName] = useState(username)
  return (
      <div>
          <input
              type="text"
              Value={UserName} 
          onChange={
              (e) => {
                  setUserName(e.target.value)
              }
          }
          />
    </div>
  )
}
