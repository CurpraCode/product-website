import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

type LayoutProps = {
  children: React.ReactNode;
}
const index = ({children}:LayoutProps) => {
  return (
    <div>
      <Header name='linear-gradient(117.32deg, #5C0E62 -41.64%, #00B5D0 174.5%)'/>
      {children}
      <Footer/>
    </div>
  )
}

export default index