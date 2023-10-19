import React from 'react';
import Swal from 'sweetalert2'

export default function AddProducts() {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.productImage.value;
        const name = form.productTitle.value;
        const price = form.price.value;
        const type = form.productType.value;
        const brand = form.brandName.value;
        const rating = form.rating.value;
        const description = form.productDescription.value;
        const newProduct = {image, name, price, type, brand,rating, description};
        console.log(newProduct)

        // sending data backend
        fetch(('http://localhost:5000/shop'),{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
        // form.reset();

    };

  return (
    <div>
      <h2 className="font-bold text-3xl pb-10">Add New Product</h2>
      <form onSubmit={handleAddProduct}>
      <div className="space-y-5">
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="productTitle" 
                  placeholder="Product Title"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="productImage" 
                  placeholder="Product Image"
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
                    <option value="levis">Levi's</option>
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
                className="input input-bordered"/>
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <textarea
                name="productDescription"
                placeholder="Product short description"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </label>
          </div>
          <input type="submit" className="btn text-white w-full btn-primary" value="Add New Product" />
        </div>
      </form>
    </div>
  );
}
