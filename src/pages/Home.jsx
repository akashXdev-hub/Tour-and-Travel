import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Footer from "../components/Footer/Footer";
import PackageCard from "../components/packageCard/PackageCard";
import TravelCategories from "../components/Travel/TravelCategories";
import Testimonials from  "../components/Testimonial/Testimonial";
import TravelInspirations from "../components/TravelInspirations/TravelInspirations"

 const Home = () => {
  return (
    <div>
      <Navbar/>
      <div style={{marginBottom: "40px"}}> <Hero/></div>
      
      <section style={{ padding: "35px 0", textAlign: "center"}}>
        <h2 style={{fontSize: "2rem", marginBottom: "10px",color: "#1d3b84"}}>Popular Packages</h2>
        <p style={{ marginBottom: "5px", color: "#555"}}>
          Explore our top travel packages with unforgettable experiences!
        </p>
      </section>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
      <PackageCard
        image="/images/img2.jpg"
        title="Maldives Luxury Getaway"
        location="Maldives"
        days={7}
        nights={6}
        price="2,499"
      />
       <PackageCard
        image="/images/img2.jpg"
        title="Maldives Luxury Getaway"
        location="Maldives"
        days={7}
        nights={6}
        price="2,499"
      />
      
      <PackageCard
        image="/images/img4.jpg"
        title="Swiss Alps Tour"
        location="Switzerland"
        days={10}
        nights={9}
        price="1,899"
      />
      <PackageCard
        image="/images/img3.jpg"
        title="Spiritual Varanasi"
        location="India"
        days={5}
        nights={4}
        price="6,499"
      />
    </div>

    <TravelCategories />
    <Testimonials/>
    <TravelInspirations/>
    <Footer/>
    
    </div>
  )
}

export default Home
