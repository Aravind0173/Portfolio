import React from 'react'
import Html_logo from '../../assets/Html_logo.png'
import Tailwind_logo from '../../assets/Tailwind_logo.png'
import js_logo from '../../assets/js_logo.png'
import React_logo from '../../assets/React_logo.png'
import Github from '../../assets/github-logo.webp'
import blender from '../../assets/blenderlogo.webp'

function Skill() {
  return (
    <div className='bg-teal-950    w-full pt-6  '>
      <h1 className='ms-55 mt-8 text-teal-300 font-bold underline text-6xl'>Skills</h1>


      <div className='grid mx-50 mt-15  lg:grid-cols-6 lg:gap-10   md:grid-cols-2 md:gap-3'>
        <h1 className='text-center flex flex-col '><img className='mb-2'  src={Html_logo} alt="" />HTML</h1>
        <h1 className='text-center flex flex-col '><img className='mb-2' src={Tailwind_logo} alt="" />Style:Tailwind Css</h1>
        <h1 className='text-center flex flex-col '><img className='mb-2' src={js_logo} alt="" />Language:Java Script</h1>
        <h1 className='text-center flex flex-col '><img className='mb-2' src={React_logo} alt="" />Library:React</h1>

         <h1 className='text-center flex flex-col  '><img className='bg-amber-50 mb-2 h-40 w-40'  src={Github} alt="" />Github</h1>
        <h1 className='text-center flex flex-col '><img className='mb-2' src={blender} alt="" />Blender</h1>
      

      </div>




    </div>
  )
}

export default Skill
