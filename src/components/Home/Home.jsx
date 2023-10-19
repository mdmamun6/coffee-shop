import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {


  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(('http://localhost:5000/getbrand'))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBrands(data)
      })

},[])
  return (
    <div>
      <h2 className="text-3xl">Home</h2>
        <div className='grid gap-6 md:grid-cols-3'>
        {
          brands.map(brand => (
            <NavLink to={`/brand/${brand?.name?.toLowerCase()}`}>
              <div className="card  bg-white shadow-xl rounded-md">
                <figure className="px-5 pt-5">
                  <img src={brand?.img} alt="image" className="w-full h-60 rounded-sm" />
                </figure>
                <div className="card-body  text-left">
                  <h2 className="card-title text-left">{brand.name}</h2>
                </div>
              </div>
            </NavLink>
          ))
        }
        </div>
    </div>
  )
}
