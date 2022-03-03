import React from "react";
import BlogHome from "../../Blog/BlogHome/BlogHome";
import Footer from "../../Shared/Footer/Footer";
import FooterMain from "../../Shared/Footer/FooterMain";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import ContentDetox from "../Content/ContentDetox/ContentDetox";
import VideoContent from "../Content/VideoContent/VideoContent";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
        <NavMain></NavMain>
        <Landing></Landing>
        <ContentDetox></ContentDetox>
        <Services></Services>
        {/* <BlogHome></BlogHome> */}
        <VideoContent></VideoContent>
        <Newsletter></Newsletter>
        {/* <Footer></Footer> */}
        {/* <FooterMain></FooterMain> */}
        </>
    )
}

export default Home;