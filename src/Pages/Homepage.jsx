import React from 'react'
import HomeCarousel from '../customer/components/Carousel/HomeCarousel'
import HomeProductSection from '../customer/components/Home/HomeProductSection'
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";

const Homepage = () => {
    return (
        <div>
            <HomeCarousel/>
            <div className='space-y-10 py-20'>
                <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
                <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
                <HomeProductSection data={sareePage1} section={"Saree"} />
                <HomeProductSection data={dressPage1} section={"Dress"} />
                <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
                <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
            </div>
        </div>
    )
}

export default Homepage