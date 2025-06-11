import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'

const layout = ({Children}) => {
  return (
    <>
    <Header />
        <div className='content'>{Children} </div>

    <Footer />
         
    </>
  )
}

export default layout