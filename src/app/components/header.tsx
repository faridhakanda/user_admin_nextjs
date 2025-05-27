
import Link from 'next/link'
import React from 'react'

const Header = () => {
  
  return (
    <div className="bg-zinc-100 p-2 justify-around flex">
        <Link href="/">Home</Link>
        <Link href="./order">Order</Link>
        <Link href="./about">About</Link>
        <Link href="./notification">Notification</Link>
        <Link href="./chat">Chat</Link>
        <Link href="./help">HelpLine</Link>
        <Link href="./product">Product</Link>
        <Link href="./profile">Profile</Link>
    </div>
  )
}

export default Header