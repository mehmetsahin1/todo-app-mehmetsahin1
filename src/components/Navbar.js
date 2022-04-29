import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="bg-red-500 h-12 flex items-center justify-between px-10 text-white">
            <Link to="/"><h1 className="font-semibold">Symfony TODO</h1></Link>
        </div>
    );
}

export default Navbar;