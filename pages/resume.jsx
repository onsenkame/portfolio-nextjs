import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Warren | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Warren Au</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/warren-au/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/onsenkame'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <p>
        Excellent at building and leading groups under pressure, adaptive, and experienced with working across cultural and lingual borders looking to support exciting web development platforms and the teams behind them. Skilled at assessing goals and performance and using this insight to develop and tackle new processes and projects to empower grassroot organizations with scalable ambitions.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Fullstack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> Javascript
            <span className='px-2'>|</span> React
            <span className='px-2'>|</span> Express
            <span className='px-2'>|</span> tensorflow.js
            <span className='px-2'>|</span> JWT
            <span className='px-2'>|</span> ML5
            <span className='px-2'>|</span> Next JS
            <span className='px-2'>|</span> SQL
            <span className='px-2'>|</span> Socket.io
            <span className='px-2'>|</span> Postgresql
            <span className='px-2'>|</span> Redux
            <span className='px-2'>|</span> Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            JET Program Ishikawa
            </span>
            <span className='px-2'>|</span>Kanazawa, Japan
          </p>
          <p className='py-1 italic'>Assistant Language Teacher (04/2019 - 09/2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed and executed specialized English language curriculum in classes ranging from 2 to 60 students
            </li>
            <li>
            Encouraged growth and confidence in students and staffs ability to influence local programs and environment by guiding the creation of a school driven community beautification project
            </li>
            <li>
            Educated on awareness of global developments and methods of integrating international solutions through lessons on current events on racial tension supplemented with student to specialist interactions.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Silicon Forensics Inc.
            </span>
            <span className='px-2'>|</span>Pomona, CA
          </p>
          <p className='py-1 italic'>Webmaster/Graphics Designer (01/2014 - 06/2015)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Regulated and managed access rights of website users as a server administrator bridging expectations of strict security and ease of access between company and clients in law enforcement and U.S. Government Agencies  
            </li>
            <li>
            Optimized client satisfaction and provide concise, timely customer service on orders ranging upwards of $50,000
            </li>
            <li>
            Designed and revised website banners, product fliers, product photos, and company logo
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Fullstack Academy Web Development Bootcamp</span>
            <span className='px-2'>|</span>New York, NY
          </p>
          <p className='py-1 italic'>Software Engineering Certificate  (2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Full-time, Full Stack Javascript Web Development Immersive  
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>University of California, San Diego</span>
            <span className='px-2'>|</span>San Diego, CA
          </p>
          <p className='py-1 italic'> B.S. - Biochemistry and Cell Biology</p>
          <p className='py-1 italic'> Minor: Japanese Studies</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>University of California Extensions, San Diego</span>
            <span className='px-2'>|</span>San Diego, CA
          </p>
          <p className='py-1 italic'>UCSD TEFL Professional Teaching Certification</p>
        </div>
      </div>
    </>
  );
};

export default resume;
