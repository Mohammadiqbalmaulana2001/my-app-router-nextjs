"use client"
import React, { useState } from 'react'

export default function AdminProduct() {
    const [status, setStatus]= useState('')
    const revalidate = async () => {
       const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=iqbal1234',
        {
            method: "POST"
        }
        )
        if(!res.ok){
            setStatus("Failed to revalidate")
        }else{
            const response = await res.json()
            if(response.revalidate){
                setStatus("Revalidated successfully")
            }
        }
        
        
    }  
  return (
    <div>
        <p>{status}</p>
        <button className='bg-red-500 text-white p-2 rounded-xl m-5' onClick={() => revalidate()}>Revalidate</button>
    </div>
  )
}
