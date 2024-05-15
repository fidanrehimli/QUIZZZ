import React from 'react'
import { Helmet } from 'react-helmet'

const News = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>News</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
  )
}

export default News