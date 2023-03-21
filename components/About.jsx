import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Warren from '../public/assets/mask.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#378563]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Excellent at building and leading groups under pressure, adaptive, and experienced with working across cultural and lingual borders looking to support exciting web development platforms and the teams behind them. Skilled at assessing goals and performance and using this insight to develop and tackle new processes and projects to empower grassroot organizations with scalable ambitions.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2022 after returning from an extended teaching experience in Japan as the COVID-19 pandemic started to normalize.
            Witnessing the importance of web usability and accessibility in the face of a global pandemic, I decided to pursue a career in web development.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={Warren} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
