import React from 'react';
import destinationBgImg from '../assets/images/destination/background-destination-desktop.jpg';
import Navigation from './Navigation';
import moon from '../assets/images/destination/image-moon.png';
import mars from '../assets/images/destination/image-mars.png';
import europa from '../assets/images/destination/image-europa.png';
import titan from '../assets/images/destination/image-titan.png';

function Destination() {
  const planets = [
    {
      id: 1,
      name: 'Moon',
      description: 'See our planet as you never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      image: moon,
      averageDistance: "384,400 KM",
      travelTime: "3 DAYS"
    },
    {
      id: 2,
      name: 'Mars',
      description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest.",
      image: mars,
      averageDistance: "225 MIL. KM",
      travelTime: "9 MONTHS"
    },
    {
      id: 3,
      name: 'Europa',
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      image: europa,
      averageDistance: "628 MIL. KM",
      travelTime: "3 YEARS"
    },
    {
      id: 4,
      name: 'Titan',
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      image: titan,
      averageDistance: "1.6 BIL. KM",
      travelTime: "7 YEARS"
    },
  ];

  const [activePlanet, setActivePlanet] = React.useState(planets[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col font-custom"
      style={{ backgroundImage: `url(${destinationBgImg})` }}
    >
      <Navigation />
      <div className='text-white pl-20 mt-10'>
        <h2 className='text-3xl'><span className='mr-3 text-[#484B54] font-bold'>01</span>PICK YOUR DESTINATION</h2>
      </div>
      {/* main section */}
      <main className="flex-1 w-11/12 md:w-3/4 mt-10 md:mt-9 bg-opacity-50 rounded-lg mx-auto flex items-center justify-center">
        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-40 text-white">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src={activePlanet.image} alt={activePlanet.name} className="max-h-60 md:max-h-[700px] object-contain transform transition-transform duration-700 ease-in-out scale-100 hover:scale-105" />
          </div>
          <div className="w-full md:w-1/2 min-h-[300px] px-4">
            <div className="mb-4 flex items-center gap-10 max-w-full">
              {planets.map(planet => (
                <p
                  key={planet.id}
                  className={`cursor-pointer text-lg md:text-xl md:uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transform after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100 ${planet.name === activePlanet.name ? 'font-bold after:scale-x-100' : ''}`}
                  onClick={() => setActivePlanet(planet)}
                >
                  {planet.name}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-7xl md:text-9xl mt-4">{activePlanet.name}</h3>
              <p className="text-sm mt-5 md:text-base">{activePlanet.description}</p>
              <hr className='mt-16 text-black' />
              <div className='flex items-center justify-between px-5 mt-4 text-white'>
                <div>
                  <p className='text-sm'>AVG. DISTANCE</p>
                  <p className='text-3xl'>{activePlanet.averageDistance}</p>
                </div>
                <div>
                  <p className='text-sm'>EST. TRAVEL TIME</p>
                  <p className='text-3xl'>{activePlanet.travelTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
