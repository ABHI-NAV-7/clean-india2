import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import About from "../components/About";

import HowItWorks from "../components/HowItWorks";

import Leaderboard from "../components/Leaderboard";


import Footer from "../components/Footer";

function Home() {

  return (

    <div>

      <Navbar />

      <Hero />

      

      <HowItWorks />

      <Leaderboard />

      <About />

      <Footer />

    </div>

  );

}

export default Home;