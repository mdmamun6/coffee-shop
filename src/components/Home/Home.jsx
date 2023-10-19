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
        <div className='grid gap-6 grid-cols-3'>
        {
          brands.map(brand => (
              <div className="card  bg-white shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={brand?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{brand.name}</h2>
                  <div className="card-actions">
                    <NavLink to={`/bata/${brand?.name?.toLowerCase()}`}><button className="btn btn-primary">Buy Now</button></NavLink>
                  </div>
                </div>
              </div>
          ))
        }
        </div>
    </div>
  )
}
