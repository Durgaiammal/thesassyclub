import React from 'react'
import Categories from '../Components/Categories'
import Banner from '../Components/Banner'
import SectionHeader from '../Components/SectionHeader'
import WomensWear from '../Components/WomensWear'
import MensWear from '../Components/MensWear'
import Accessories from '../Components/Accessories'
import QueriesBanner from '../Components/QueriesBanner'
import HomeBanner from '../Components/HomeBanner'
import WomensProducts from '../Components/WomensProducts'


function Home() {
    return (
        <div>
            <Categories />
            <Banner />
            <SectionHeader />
            <WomensWear />
            <WomensProducts />
            <MensWear />
            <Accessories />
            <HomeBanner />
            <QueriesBanner />
        </div>
    )
}

export default Home
