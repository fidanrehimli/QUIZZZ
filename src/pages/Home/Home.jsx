import React from 'react'
import { Helmet } from 'react-helmet'
import Image from './ImageSec/Image'
import Learn from './LearnAbout/Learn'
import SummerEat from './Summer/SummerEat'
import News from './News/News'
import Gallery from './Gallery/Gallery'
import Footer from '../../layout/Footer'

const Home = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Image/>
            <Learn/>
            <SummerEat/>
            <News/>
            <Gallery/>
            <Footer/>
    </div>
  )
}

export default Home