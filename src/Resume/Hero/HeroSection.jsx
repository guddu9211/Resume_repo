import React from 'react'
import { skills } from '../data/skills'
import AboutMe from '../Components/AboutMe'
import WorkExperience from '../Components/WorkExperience'
import Education from '../Components/Education'

const HeroSection = () => {

  return (
    <div className='w-3/4 h-full my-[2rem] border-[1px] border-sky-200 mx-auto rounded-xl bg-sky-100'>
        
        <div className='flex gap-4'>
            {/* left side for personal information and links  */}
            <div className='w-[30%] flex flex-col items-center'>
                <div className='w-[60%] rounded-4xl'>
                    <img src='https://res.cloudinary.com/dyfthf6kw/image/upload/v1715701264/codehelpDir/msns4zc7rlrcgwrlsggu.png' 
                        alt='display profile'
                        className='rounded-full' />
                </div>

                <div className="w-full my-2 flex gap-4 flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-teal-600 dark:text-teal-200">Manish Prajapati</h1>
                    <p className="text-md font-sans text-slate-500 dark:text-teal-400">Problem Solver</p>
                </div>
                <div className='w-[70%] h-[1px] border-[1px] border-b-gray-400'>
                    {/* this is only a horizontal line  */}
                </div>

                {/* my skills  */}
                <div className='p-4'>
                    <p className='text-2xl font-semibold'>Skills</p>
                    <div className='grid grid-cols-3 gap-1'>
                        {
                            skills.map((skill, index) => (
                                <p key={index}
                                    className='text-sm font-sans text-slate-500'
                                >{skill}</p>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-[1px] border-[1px] border-r-sky-700'>
                {/* vertical bar  */}
            </div>

            {/* right side for detailed information  */}
            <div className='w-[80%] p-4 flex flex-col gap-4'>
                <AboutMe/>
                <WorkExperience/>
                <Education/>
            </div>
        </div>

    </div>
  )
}

export default HeroSection