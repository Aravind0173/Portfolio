import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    


    <div className='flex bg-teal-900 mx-50 py-4 px-2 rounded-md items-center border-2 border-teal-700 shadow-md shadow-white  '>

      


        <span className='flex  text-white ms-4 '>
        <h1 className='me-2 border rounded-md text-white border-white shadow-lg shadow-white  px-2'>A</h1>
        <h1>Aravind</h1>
        </span>



        <ul className='flex  gap-15 text-white ms-50 '>
          

        <Link to='/About'><li className='cursor-pointer hover:text-teal-600 border-2 border-teal-900 hover:bg-white rounded-md  hover:border-teal-700  px-3 py-2'> About</li></Link>

        <Link to='/Project'> <li className='cursor-pointer hover:text-teal-600 border-2 border-teal-900 hover:bg-white rounded-md  hover:border-teal-700  px-3 py-2'>Project</li></Link>

        <Link to='/Skill'><li className='cursor-pointer hover:text-teal-600 border-2 border-teal-900 hover:bg-white rounded-md  hover:border-teal-700  px-3 py-2'>Skill</li></Link>

        <Link to='/Blog'><li className='cursor-pointer hover:text-teal-600 border-2 border-teal-900 hover:bg-white rounded-md  hover:border-teal-700  px-3 py-2'>Blog</li></Link>
        </ul>
        




        <a href="tel:+916369362670" className='cursor-pointer ms-55 py-2 px-3 border border-white text-white rounded-md bg-teal-700 hover:bg-white hover:text-teal-600 hover:border-teal-700'>Contact me</a>
      


      </div>
      
    </>
  )
}

export default Navbar
