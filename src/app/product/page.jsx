import React from 'react'
import { getData } from '../../services/products'
import Link from 'next/link'

export default async function ProductPage() {
  const product = await getData("http://localhost:3000/api/product")
  console.log(product)
  return (
    <div className='grid grid-cols-4 mt-2 place items-center gap-5'>
        {/* <h1>Product Page</h1> */}
        { product.data.map(item => (
            <Link href={`/product/detail/${item.id}`} key={item.id} className="w-full max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={item.image} alt="product image" />
                
                <div className="px-5 pb-5">
                    
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{item.title}</h5>
                    
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {item.price}</span>
                        <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                </div>
            </Link>

        ))}
    </div>
  )
}
