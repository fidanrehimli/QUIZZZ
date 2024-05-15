import React, { useEffect, useState } from 'react'
import "./sumereat.css"
import axios from 'axios'
const SummerEat = () => {

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
    <div className='summer'>
        <h3 className='summertext'>OUR OFFERS</h3>
        <h1 className='summerparam'>Our Offer This Summer</h1>
        <h5 className='params'>Far far away, behind the word mountains, far from the countries<br/>Vokalia and Consonantia, there live the blind texts.</h5>
        <div className='card'>
{products.slice(2).map((item)=>{
    return(
        <div className='cards'>
            <img className='img' src={item.image} alt=''/>
              <h1 className="pricesummer">${item.price}</h1>
            <h2 className="categorysummer">{item.category}</h2>
            <p className='titlesummer'>{item.title}</p>
            <button className='orderbtn'>Order Now!</button>
        </div>
    )
})}
        </div>
      
    </div>
    
  )
}

export default SummerEat