import React, { useEffect, useState } from 'react';

export default function AllProducts() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
      const data = await res.json();
      console.log(data);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper">
        {/* Map the below div against product data */}
        {data.map((e,i) => (
          <div key={i}>
            <h3 className="name">{e.name}</h3>
            <div className="brand">{e.brand}</div>
            <div className="price">{e.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}