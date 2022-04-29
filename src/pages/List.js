import { useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTask, deleteList } from "../reducers/reducer";
import { useLocation, useNavigate } from "react-router-dom";

function List() {
    const { id } = useParams();
    const tasks = useSelector(state => state.todo.tasks.filter(task => task.listId === id));
    const list = useSelector(state => state.todo.lists.find(list => list.id === id));
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState("");
    const [hasError, setHasError] = useState(false);
    let location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        setNewTask("");
    },[location])

    const handleAddTask = () => {
        if (newTask.length > 0) {
            dispatch(addTask({
                body: newTask,
                listId: id,
            }))
            setHasError(false);
            setNewTask("");
        } else {
            setHasError(true);
        }
    }

    const handleDeleteList = () => {
        navigate("/");
        dispatch(deleteList(list.id))
    }

    return (
        <div>
            <div className="flex items-center justify-between font-bold mb-8">
                <h1>{list.name}</h1>
                <button onClick={handleDeleteList}>
                    <i className="ri-delete-bin-line text-red-500 text-lg ml-2"></i>
                </button>
            </div>
            <div className="h-full w-full overflow-y-auto list-items">
                {tasks.map(task => (<TodoItem task={task} key={task.id} />))}
                <div className="flex items-center mb-2 bg-slate-200 px-4 py-2 rounded-lg justify-between">
                    <input type="text" id="add_task" className={(hasError ? 'border border-red-500' : '') + " rounded-md mr-2 w-full px-2 py-1 flex-1"} value={newTask} onChange={(e) => {
                    setNewTask(e.target.value);
                    }} />
                    <button onClick={handleAddTask} className="px-2 py-1 bg-green-500 flex items-center justify-center text-white rounded-md">Add task <i className=" ml-2 ri-add-line text-lg"></i></button>
                </div>
            </div>
        </div>
    );
}



export default List;