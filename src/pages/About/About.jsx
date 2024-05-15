import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import { ProductSchema } from '../../schema/ProductsSchema'

const About = () => {

  const [titleValue,setTitleValue]=useState("")
  const [imageValue,setImageValue]=useState("")
  const [categoryValue,setCategoryValue]=useState("")

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(ProductSchema)
  })
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
  )
}

export default About