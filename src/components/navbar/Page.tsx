

const Navbar = () => {
  return (
    <div className="bg-emerald-300 mt-1 border-spacing-0 border-y borderBottom: '2px solid ">
    

        <nav className="text-blue-900 font-bold flex justify-between items-center">

           <h1 className="text-xl m-2">Frontend Developer</h1>
           
           <ul className="flex gap-3 mr-5">
           <a className="hover:text-blue-100" href="">Home</a>
           <a className="hover:text-blue-100" href="">Contact</a>
           <a className="hover:text-blue-100" href="">About</a>
           </ul>
        </nav>
    </div>
  )
}

export default Navbar
