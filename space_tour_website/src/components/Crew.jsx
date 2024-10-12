import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from './Navigation';
import bgImage from '../assets/images/crew/background-crew-desktop.jpg';
import member1 from '../assets/images/crew/image-douglas-hurley.png';
import member2 from '../assets/images/crew/image-mark-shuttleworth.png';
import member3 from '../assets/images/crew/image-victor-glover.png';
import member4 from '../assets/images/crew/image-anousheh-ansari.png';

function Crew() {
    const crew =  [
        {
            id: 0,
            role: "Commander", 
            name: "Douglas Hurley",
            description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            image: member1
        },
        {
            id: 1,
            role: "Mission Specialist",
            name: "Mark Shuttleworth",
            description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            image: member2
        },
        {
            id: 2,
            role: "Pilot", 
            name: "Victor Glover",
            description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            image: member3
        },
        {
            id: 3,
            role: "Flight Engineer",
            name: "Anousheh Ansari",
            description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            image: member4
        }
    ];

    const [activeCrew, setCrew] = React.useState(crew[0]);

    const roleRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(roleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(nameRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(descriptionRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(imageRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1 });
    }, [activeCrew]);

    return (
      <div className='min-h-screen bg-cover w-full font-custom' style={{backgroundImage : `url(${bgImage})`}}>  
        <Navigation /> 
        <div>
          <h2 className='text-3xl text-white mt-16 ml-16'><span className='mr-5 text-[#484B54] font-bold'>02</span>MEET YOUR CREW</h2>
        </div>
        <main className='px-0 md:px-16 w-11/12 md:w-full mt-10 md:mt-5 bg-opacity-50 rounded-lg mx-auto text-white flex flex-col items-center justify-center md:flex-row md:gap-36'> 
        <div className=' max-w-[700px] px-5 md:px-0 text-center md:text-left min-h-[500px] pt-16 leading-loose '>
          <div className=''>
            <p ref={roleRef} className='text-2xl md:text-5xl uppercase mb-6 text-[#D2D8F9]'>{activeCrew.role}</p> 
            <h2 ref={nameRef} className='text-4xl md:text-6xl uppercase'>{activeCrew.name}</h2> 
            <p ref={descriptionRef} className='mt-5 max-w-[59ch] text-[#D2D8F9]'>{activeCrew.description}</p>
          </div>
           
        <div className='p-8 flex gap-4 md:gap-16 text-white justify-center md:justify-start md:mt-24'>  
            {crew.map(member => (
                <div key={member.id} className="cursor-pointer rounded-full bg-white w-5 h-5" onClick={() => setCrew(member)}></div>
            ))}
        </div>
            </div>
          <div className='flex justify-center items-center  mt-10 md:mt-0'>   
            <img ref={imageRef} src={activeCrew.image} alt={activeCrew.name} className="max-w-xs md:max-w-lg" />   
          </div>
        </main>
      </div>
    );
}

export default Crew;
