import React from 'react'

const Footer = () => {
  return (
<section className='flex justify-center flex-col'>
<div className=' h-[1px] bg-gray-300 my-5 w-[80%] max-md:w-full rounded-full'>

</div>
<div className='flex justify-between px-5 max-sm:flex-col items-center gap-2'>
  <p>© 2024 Edusity. All rights reserved.</p>
  <p className='flex gap-5'> 
<p>Terms and Service</p>
<p>Privacy and Policy</p>

  </p>
</div>
</section>
  )
}

export default Footer