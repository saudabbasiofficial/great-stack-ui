import { MoveRight } from "lucide-react"


const Hero = () => {
  return (
    <>
    <section className='hero h-[650px] '>
<div className='bg-[#0f165ba1] h-full w-full flex items-center justify-center flex-col gap-5'>
<h1 className="text-center text-white text-5xl font-bold">We Ensure better education <br /> for a better world</h1>
<p className="text-center text-white font-medium">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, <br /> and experiences needed to excel in the dynamic field of education</p>
<button className="text-black bg-white px-4 font-medium py-2 rounded-full flex gap-2 items-center justify-center">Explore More <MoveRight className="flex self-center mt-1" strokeWidth={3} /></button>
</div>
    </section>
    
    </>
  )
}

export default Hero