import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import huaxuan from '../public/assets/projects/huaxuan.PNG';
import lazyredditor from '../public/assets/projects/lazyredditor.png';
import scribble from '../public/assets/projects/scribble.png'
import soon from '../public/assets/projects/coming soon.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#378563]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Huaxuan Art Gallery'
            backgroundImg={huaxuan}
            projectUrl='/huaxuan'
            tech='React JS'
            fill
          />
          <ProjectItem
            title='TheLazyRedditor'
            backgroundImg={lazyredditor}
            projectUrl='/lazyredditor'
            tech='React JS'

          />
          <ProjectItem
            title='Scribble Me This'
            backgroundImg={scribble}
            projectUrl='/scribblemethis'
            tech='React JS'

          />
          <ProjectItem
            title='Coming soon'
            backgroundImg={soon}
            projectUrl='/ongoing'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
