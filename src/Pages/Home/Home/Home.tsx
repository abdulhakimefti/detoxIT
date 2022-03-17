import React, { useEffect, useState } from "react";  
import Footer from "../../Shared/Footer/Footer";
import FooterMain from "../../Shared/Footer/FooterMain";
import LoadingIcon from "../../Shared/LoadingIcon/LoadingIcon";
import NavMain from "../../Shared/Navbar/NavMain/NavMain";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import BlogHome from "../BlogHome/BlogHome";
import ContentDetox from "../Content/ContentDetox/ContentDetox";
import VideoContent from "../Content/VideoContent/VideoContent";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";

const Home = () => {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    },[])
    return (
        <>
       {
           loading ? (
               <LoadingIcon/>
           ) : (
          <>
            <NavMain></NavMain>
            <Landing></Landing>
            <ContentDetox></ContentDetox>
            <Services></Services>
            <BlogHome></BlogHome>
            <VideoContent></VideoContent>
            <Newsletter></Newsletter>
            <Footer></Footer>
            <FooterMain></FooterMain></>
           )
       }
        </>
    )
}

export default Home;