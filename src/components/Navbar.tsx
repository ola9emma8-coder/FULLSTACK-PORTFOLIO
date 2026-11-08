export default function Navbar(){
    const pages: string[] = ["About", "Skills", "Projects", "Services", "Contact"];
    const code: string = "<>"
    return(
        <div className="flex justify-around w-full items-center gap-10 mt-2 fixed left-0 z-50 top-0
        bg-gray-950/70 backdrop-blur-md">
           <h2 className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400
           bg-clip-text text-transparent text-lg"
           >{code} Olamide</h2>
           <div className="flex flex-row gap-5">
             {pages.map((page, index) => (
                <a href="/" className="text-sm text-white cursor-pointer" 
                key={index}>{page}</a>
             ))}
           </div>
           <button className="bg-violet-600 hover:bg-violet-500 rounded-lg px-5 py-1 text-md 
           text-white text-center cursor-pointer transition duration-300 ease-in-out">
            Hire Me
           </button>
        </div>
    )
}