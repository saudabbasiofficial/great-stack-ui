
const Navbar = () => {
  return (
    <>
    <nav  className='flex justify-between px-10 py-2 sticky bg-[#212ea0] items-center'>
<div>
<img src="/logo.png" alt="" className="h-8" />
</div>

<div className='flex gap-5 max-md:hidden text-white items-center '>

    <a href="/">Home</a>
    <a href="/">Program</a>
    <a href="/" className="">About us</a>
    <a href="/" className="bg-white rounded-full text-black px-3 py-2">Contact us</a>


</div>
<div className="md:hidden">
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" drawer-button"><img src="/hamb.png" className="bg- w-[45px] p-1" alt="" /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <a href="/">Home</a>
    <a href="/">Program</a>
    <a href="/" className="">About us</a>
    <a href="/" className="bg-white rounded-full text-black px-3 py-2">Contact us</a>
    </ul>
  </div>
</div>
</div>

    </nav>
    
    </>
  )
}

export default Navbar