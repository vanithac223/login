import Link from 'next/link'
import React from 'react'

export default function Homee() {
  return (
    <div>
      <Link href={"/"}>HOME PAGE</Link>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/contact"}>Contact</Link>
      
      </div>
      
    </div>
  )
}
