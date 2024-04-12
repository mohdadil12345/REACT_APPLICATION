import React, { useState } from 'react';

function CrudapiEdit({ formdata, setEditFormOpen, fetchdata }) {
  const [editdata, seteditdata] = useState(formdata);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    seteditdata({ ...editdata, [name]: value });
  };

  const handleSubmitEditForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/products/${formdata.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editdata),
      });
      if (res.ok) {
        fetchdata();
        setEditFormOpen(false);
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const cancel_form = () => {
    setEditFormOpen(false);
  };

  return (
    <div>
      <div className="edit-form-container">
        <form  onSubmit={handleSubmitEditForm} className="edit-form">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={editdata.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={editdata.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={editdata.price}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={editdata.description}
            onChange={handleInputChange}
          />
          <select
            value={editdata.category}
            onChange={handleInputChange}
            name="category"
          >
            <option value="">Select category</option>
            <option value="mens">Men</option>
            <option value="women">Women</option>
            <option value="jewellery">Jewellery</option>
          </select>
          <button type="submit">Submit</button>
          <button onClick={cancel_form} type="button">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrudapiEdit;
