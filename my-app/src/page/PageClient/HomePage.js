import React from 'react'
import Banner from '../../components/clients/home/Banner'
import ListProductNew from '../../components/clients/home/ListProductNew'

const HomePage = (props) => {
  return (
    <div className='body__index'>
        <Banner/>
        <ListProductNew/>
    </div>
  )
}

export default HomePage