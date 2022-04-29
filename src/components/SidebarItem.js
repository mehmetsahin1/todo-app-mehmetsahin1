import { Link } from "react-router-dom";

function SidebarItem(props) {
    return ( 
        <Link to={`/list/${props.list.id}`} className="block mb-2">
            <div className="px-4 py-2 bg-slate-100 text-xs rounded-md">
                <h1 className="flex items-center">
                    <i className="ri-todo-line mr-2 text-lg"></i>
                    <span>{props.list.name}</span>
                </h1>
            </div>
        </Link>
     );
}

export default SidebarItem;