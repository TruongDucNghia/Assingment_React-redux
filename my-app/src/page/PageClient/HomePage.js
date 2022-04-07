import React from 'react'
import Banner from '../../components/clients/home/Banner'
import List3News from '../../components/clients/home/List3News'
import ListProductNew from '../../components/clients/home/ListProductNew'
import ListProductView from '../../components/clients/home/ListProductView'

const HomePage = (props) => {
  return (
    <div className='body__index'>
        <Banner/>
        <ListProductNew/>
        <List3News/>
        <ListProductView/>
    </div>
  )
}

export default HomePage