import React, { useEffect, useState } from 'react'
import "./gallery.css"
import axios from 'axios'
const Gallery = () => {

    const [products,setProducts] =useState([])

    const GetAllData = async()=>{
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res?.data)
        console.log(res?.data);
    }
    useEffect(()=>{
        GetAllData()
    },[])
  return (
    <section className='gallerysec'>
    <h1 className='gallery'>Gallery</h1>
    <p className='gallerytext'>Far far away, behind the word mountains, far from the<br/>countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className='search-box'>
    {
      products.slice().map((row)=>{
          return <div className='box-search'>
          <div>
          <img className='img-search' src={row.image} alt="" />
          </div>
          <div>
          </div>
          </div>
      })
    }
    </div>
 </section>
  )
}

export default Gallery