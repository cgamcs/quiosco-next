import Link from 'next/link'
import React from 'react'

export default function GoBackButton() {
  return (
    <Link
      href={'/admin/products'}
      className="bg-amber-400 w-full lg:w-auto text-xl px-8 py-2.5 text-center font-bold cursor-pointer"
    >Regresar</Link>
  )
}
