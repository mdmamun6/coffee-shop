import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2'
import 'swiper/css';

export default function Brands() {

    const [brands, setBrands] = useState([]);
    const [brandimg, setBrandImg] = useState([]);
    const { brandName} = useParams();

    const handleUpdate = _id =>{
        console.log(_id);
        
    }
    useEffect(() => {
        fetch(('http://localhost:5000/shop'))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBrands(data)
        })

        fetch(('http://localhost:5000/getbrand'))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBrandImg(data)
        })

    },[])

  return (
    <div>
        <h2 className="text-3xl">{brands?.brandName}</h2>
        {/* <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>{brandimg?.ads-img[0]}</SwiperSlide>
        </Swiper> */}
        <div className="grid text-center justify-center  grid-cols-3 gap-6">
            {
                brands?.filter(product => (product.brand == brandName)).slice(0,3).map(brand => 
                <div className='p-6 rounded-md text-center space-y-5 shadow-lg' key={brand._id}>
                    <img className='w-full' src={brand.image} alt="" />
                    <h2 className="text-2xl font-semibold">{brand.name}</h2>
                    <h2 className="text-2xl font-semibold">{brand.rating}</h2>
                    <div className="flex justify-between gap-6">
                        <button  className="btn btn-primary">See Details</button>
                        <Link to={`/product/${brand._id}`}><button  className="btn btn-secondary">Update</button></Link>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}
