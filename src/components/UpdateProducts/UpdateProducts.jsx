import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function UpdateProducts() {

    const productLoader = useLoaderData();
    const {image, name, price, type, brand, rating, description} = productLoader;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const updateProduct = {image, name, price, type, brand, rating, description};
        console.log(updateProduct)
        form.reset();

        fetch((`http://localhost:5173/products/${id}`),{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        })
    };

  return (
    <div>
      <h2 className="font-bold text-3xl">Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="space-y-5">
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="name" 
                  placeholder="Product Title"
                  defaultValue={name}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="image" 
                  placeholder="Product Image"
                  defaultValue={image}
                  className="input input-bordered"
                />
              </label>
            </div>
            
          </div>
          <div className="flex gap-6">
          <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="price" 
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <select
                  name="productType" 
                  className="select select-bordered w-full"
                >
                  <option disabled selected>Product Type</option>
                  <option value="single">Single</option>
                  <option value="variable">Variable</option>
                  <option value="affiliate">Affiliate</option>
                </select>
              </label>
            </div>            
          </div>
          <div className="flex gap-6">
            <div className="form-control  w-1/2">
                <label className="input-group input-group-vertical">
                <select
                    name="brandName" 
                    className="select select-bordered w-full"
                >
                    <option disabled selected>Select Brand Name</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="gucci">Gucci</option>
                    <option value="h&m">H&M</option>
                    <option value="levi">Levi</option>
                </select>
                </label>
            </div>
            <div className="form-control  w-1/2">
              <label className="input-group input-group-vertical">
              <input 
                type="number" 
                id="rating" 
                name="rating" 
                min="1" max="5" 
                step="0.1" 
                placeholder="Rating"
                defaultValue={rating}
                className="input input-bordered"/>
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <textarea
                name="description"
                placeholder="Product short description"
                defaultValue={description}
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </label>
          </div>
          <input type="submit" className="btn text-white w-full btn-primary" value="Update" />
        </div>
      </form>
    </div>
  )
}
