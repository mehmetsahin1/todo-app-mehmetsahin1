import { useSelector, useDispatch } from "react-redux";
import SidebarItem from "./SidebarItem";
import { useState, useEffect } from "react";
import { addList } from "../reducers/reducer";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
    const lists = useSelector((state) => state.todo.lists);
    const hasAnyListDeleted = useSelector((state) => state.todo.hasAnyListDeleted);
    const isInitialized = useSelector((state) => state.todo.isInitialState);
    const [createActive, setCreateActive] = useState(false);
    const [newList, setNewList] = useState("");
    const [hasError, setHasError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation()

    const handleAddList = () => {
        if (newList.length > 0) {
            dispatch(addList(newList));
            setHasError(false);
            setNewList("");
        } else {
            setHasError(true);
        }
    }

    useEffect(() => {
        if (!hasAnyListDeleted && !isInitialized) {
            const newList = lists[lists.length - 1];

            navigate('/list/' + newList.id);
        }
    }
    , [lists]);

    useEffect(() => {
        setNewList("");
        setCreateActive(false);
    },[location])

    return (
        <div className="shadow-lg shadow-red-200 h-full px-2 py-3 font-semibold w-56">
            <h1 className="mb-4 text-center">Your TODO Lists</h1>
            {lists.map(list => (<SidebarItem key={list.id} list={list} />))}

            <div className="px-4 py-2 bg-red-400 text-xs rounded-md text-white cursor-pointer" onClick={(e) => {
                setCreateActive(true)
            }}>
                <h1 className="flex items-center">
                    <i className="ri-add-line mr-2 text-lg"></i>
                    <span>Craete New List</span>
                </h1>
            </div>
            {createActive && <div className="w-full">
                <input type="text" value={newList} className={(hasError ? 'border border-red-500' : '') + " bg-slate-100 rounded-md pl-2 py-1 mt-2 w-full mb-1"} onChange={(e) => {
                    setNewList(e.target.value);
                }} />
                <button onClick={handleAddList} className="px-2 py-1 bg-green-500 flex items-center justify-center text-white rounded-md">Create List <i className=" ml-2 ri-add-line text-lg"></i></button>
            </div>}
        </div>
    );
}

export default Sidebar;