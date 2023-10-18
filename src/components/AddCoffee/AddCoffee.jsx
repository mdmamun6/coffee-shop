import React from 'react';

export default function AddCoffee() {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.productImage.value;
        const name = form.productTitle.value;
        const price = form.price.value;
        const type = form.productType.value;
        const brand = form.brandName.value;
        const description = form.productDescription.value;
        const newProduct = {image, name, price, type, brand, description}
        console.log(newProduct)

        // sending data backend
        fetch('http://localhost:5000/shop' , {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        // form.reset();

    };

  return (
    <div>
      <h2 className="font-bold text-3xl pb-10">Add Coffee</h2>
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
                  <option>Single</option>
                  <option>Variable</option>
                  <option>Affiliate</option>
                </select>
              </label>
            </div>            
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <select
                name="brandName" 
                className="select select-bordered w-full"
              >
                <option disabled selected>Select Brand Name</option>
                <option>Apex</option>
                <option>Bata</option>
                <option>Lotto</option>
              </select>
            </label>
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
