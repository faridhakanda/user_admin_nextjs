'use client'
import React, {useState, useEffect} from 'react'

const Product = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //   const fetchData = async() => {
    //     try {
    //       const response = await fetch('https://faridakanda.pythonanywhere.com/');
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       const jsonData = await response.json();
    //       setData(jsonData);
    //     } catch(err) {
    //       setError(err.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchData();
    // }, []);
    // if (loading) return <div>Loading...</div>
    // if (error) return <div>Error: {error}</div>
  return (
    <div>
      Product page for user!
      <h1>Data fetch from pythonanywhere api</h1>
     
    </div>
  )
}

export default Product