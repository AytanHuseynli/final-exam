import React, { Children } from 'react'
import { Helmet } from "react-helmet";
import "./BannerSection"
import BannerSection from './BannerSection';
import Flowers from './Flowers';


function Home() {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <BannerSection />
            <Flowers />
            <Children/>



        </>
    )
}

export default Home