import React from 'react'
export default async function DetailPage(params) {
  console.log(params.params.slug)
  return (
    <div>
        <h1>Detail Product Page {params.params.slug}</h1>
    </div>
  )
}
