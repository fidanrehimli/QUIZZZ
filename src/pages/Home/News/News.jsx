import React, { useEffect, useState } from 'react'
import "./news.css"
import axios from 'axios'
const News = () => {

    
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
    <div className='news'>
        <h1 className='newsparam'>NEWS</h1>
        <h5 className='params'>Far far away, behind the word mountains, far from the countries<br/>Vokalia and Consonantia, there live the blind texts.</h5>
        <div className='card'>
{products.slice(2).map((item)=>{
    return(
        <div className='cards'>
            <img className='img' src={item.image} alt=''/>
            <h2 className="categorynews">{item.category}</h2>
            <p className='titlenews'>{item.title}</p>
            <button className='orderbtn'>Read More</button>

        </div>
    )
})}
        </div>
    </div>
  )
}

export default News