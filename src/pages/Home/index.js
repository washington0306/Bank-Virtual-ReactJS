import { useState } from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Info from '../../components/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/Info/Data';
import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Sidebar from '../../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        onToggle={handleToggle}
      />
      <Navbar
        onToggle={handleToggle}
      />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
