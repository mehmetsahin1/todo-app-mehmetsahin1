import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
    return ( 
        <>
            <Navbar />
            {/* Page Content Wrapper */}
            <div className="flex absolute top-12 bottom-0 right-0 left-0">
                <Sidebar />
                {/* Page Content */}
                <div className="p-4 h-full w-full relative">
                    <Outlet />
                </div>
                {/* End Page Content */}
            </div>
            {/* End Page Content Wrapper */}
        </>
     );
}

export default Layout;