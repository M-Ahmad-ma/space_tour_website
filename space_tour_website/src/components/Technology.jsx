import React from 'react';
import Navigation from './Navigation';
import bgImage from '../assets/images/technology/background-technology-desktop.jpg';
import tec1 from '../assets/images/technology/image-launch-vehicle-portrait.jpg';
import tec2 from '../assets/images/technology/image-spaceport-portrait.jpg'; 
import tec3 from '../assets/images/technology/image-space-capsule-portrait.jpg'; 
import tec1Portrait from '../assets/images/technology/image-launch-vehicle-landscape.jpg';
import tec2Portrait from '../assets/images/technology/image-spaceport-landscape.jpg'; 
import tec3Portrait from '../assets/images/technology/image-space-capsule-landscape.jpg';

function Technology() {
  const technologies = [
    {
      id: 0,
      tec: "LAUNCH VEHICLE",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      tecImage: tec1,
      tecImagePortrait: tec1Portrait
    },
    {
      id: 1,
      tec: "Spaceport",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      tecImage: tec2,
      tecImagePortrait: tec2Portrait
    },
    { 
      id: 2,
      tec: "Space capsule",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      tecImage: tec3,
      tecImagePortrait: tec3Portrait
    }
  ];

  const [activeTec, setTec] = React.useState(technologies[0]); 

  return (
    <div className='bg-cover w-full min-h-screen bg-top font-custom' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navigation />
      <main className='w-full min-h-screen flex items-center justify-end pt-16'>
        <div className='md:max-w-[90%] w-full min-h-[60vh] flex flex-col-reverse md:flex-row justify-between my-11 md:pl-8'>
          <div className='flex flex-col items-center justify-center pt-4 md:flex-row'>   
            <div className='flex flex-row items-center md:items-start gap-9 mb-8 md:mb-0 justify-center mr-5 md:flex-col md:mr-9'>
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  className={`rounded-full md:p-9 md:px-11 p-5 px-5 text-4xl ${
                    activeTec.id === index ? 'bg-white text-black' : 'bg-transparent text-white border-2 border-white'
                  }`}
                  onClick={() => setTec(technologies[index])}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className='text-center md:text-left flex justify-center flex-col w-2/3'>
              <p className='text-sm md:text-3xl text-gray-400 uppercase tracking-wide'>THE TERMINOLOGY</p>  
              <h2 className='text-3xl md:text-7xl md:uppercase text-white mt-2'>{activeTec.tec}</h2>
              <p className='mt-4 text-gray-300 max-w-[200ch]'>{activeTec.description}</p>
            </div> 
          </div> 
          <div className='min-h-[400px] w-full md:w-[60%] md:min-h-[560px]'>
            <picture>
              <source media="(max-width: 768px)" srcSet={activeTec.tecImagePortrait} /> 
              <img src={activeTec.tecImage} alt={activeTec.tec} className='md:max-w-[700px] max-w-full min-h-[300px] md:min-h-[500px] object-cover' />
            </picture>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Technology;
