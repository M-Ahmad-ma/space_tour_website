import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Navigation from './Navigation';
import bgImageDesktop from '../assets/images/home/background-home-desktop.jpg';
import bgImageMobile from '../assets/images/home/background-home-mobile.jpg';
import bgImageTablet from '../assets/images/home/background-home-tablet.jpg';

function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations
      gsap.from(".text-large", { 
        x: "-100%", 
        duration: 1.5, 
        delay: 0.5, 
        ease: 'power2.out',
        autoAlpha: 0,
      });
      gsap.from(".text-small", { 
        x: "-100%", 
        duration: 1.5, 
        delay: 0.7, 
        ease: 'power2.out',
        autoAlpha: 0,
      });
      gsap.from(".text-paragraph", { 
        x: "-100%", 
        duration: 1.5, 
        delay: 0.9, 
        ease: 'power2.out',
        autoAlpha: 0,
      });
    });

    
    return () => {
      ctx.revert(); 
    };
  }, []);

  return (
    <div 
  className={`min-h-screen w-full bg-cover bg-no-repeat bg-center font-custom
              bg-[url('/src/assets/images/home/background-home-mobile.jpg')] 
              sm:bg-[url('/src/assets/images/home/background-home-tablet.jpg')] 
              md:bg-[url('/src/assets/images/home/background-home-desktop.jpg')]`}
>
      <Navigation />
      {/* Main Content */}
      <main className="flex text-center lg:text-left flex-col items-center justify-around text-white mt-36 lg:mt-63 md:flex-col lg:flex-row">  
        <div>
          <p className="text-sm tracking-widest text-small">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-9xl font-bold mt-4 text-large">SPACE</h1>
          <p className="mt-8 max-w-md text-paragraph text-white">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className="mt-16 w-56 h-56 rounded-full bg-white text-black flex items-center justify-center text-xl explore-button hover:bg-white hover:text-black transition duration-300">
          EXPLORE
        </button>
      </main>
    </div>
  ); 
}

export default Home;
