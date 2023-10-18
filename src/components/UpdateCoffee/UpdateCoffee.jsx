import React from 'react'

export default function UpdateCoffee() {

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.productImage.value;
        const name = form.productTitle.value;
        const price = form.price.value;
        const type = form.productType.value;
        const brand = form.brandName.value;
        const description = form.productDescription.value;
        const updateProduct = {image, name, price, type, brand, description}
        console.log(updateProduct)
        form.reset();
    };

  return (
    <div>
      <h2 className="font-bold text-3xl">Update Coffee</h2>
      <form onSubmit={handleUpdateProduct}>
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
          <input type="submit" className="btn text-white w-full btn-primary" value="Update" />
        </div>
      </form>
    </div>
  )
}
