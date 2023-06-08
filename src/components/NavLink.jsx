const NavLink = ()=>{
    return (
        <div id="navlink" className=" bg-gray-700" style={{display: "flex", justifyContent: "space-evenly"}}>
            <a href="#" className="font-bold text-white">About Me</a>
            <a href="#navlink" className="font-bold text-green-400">Shortcut</a>
            <a href="#projects" className="font-bold text-white">Projects</a>
            <a href="#contact" className="font-bold text-green-400">Contact me</a>
        </div>
    )
}

export default NavLink;