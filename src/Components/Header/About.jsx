import React from 'react'
import Aravind from '../../assets/Aravind.jpeg'
import Aravind_Resume from '../../assets/Aravind_Resume.pdf'

function About() {
  return (
    <div>
      <div className='flex   flex-col rounded-md  py-1 bg-teal-800 mx-174 items-center justify-center text-center  mt-15'>
      
             <img className='h-30 w-30' src={Aravind} alt="Loading Please Wait" title='Its Me' /> 
      
            <h1 className='text-teal-100  '>J Aravind</h1>
      
          </div>
      
      
      
          <div className='text-center mt-8'>
      
            <h1 className='text-6xl text-teal-100'>From Code To Deployments,</h1>
      
            <h1 className='text-6xl text-teal-100 mt-2'>I Make The Web Work Better!</h1>
      
            <p className='mt-8 text-teal-300'>I write clean code,automatic tasks,and build apps that <br />don't break learning,growing,and making the web better.</p>
      
          </div>
      
      
      
          <div className='flex justify-center space-x-8 mt-10'>
<a href="tel:+916369362670" className='cursor-pointer py-2 px-3 rounded-md text-white bg-teal-700 hover:text-teal-600 hover:bg-white inline-block'>
   Contact me
</a>



            <a href={Aravind_Resume} download><button className='cursor-pointer py-2 px-3 rounded-md text-teal-600 bg-white hover:text-white hover:bg-teal-700'>Download CV</button></a>
      
          </div>
    </div>
  )
}

export default About
