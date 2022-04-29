import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../reducers/reducer";

function TodoItem(props) {
    const dispatch = useDispatch();

    const handleItemComplete = () => {
        dispatch(completeTask(props.task));
    }

    const handleItemDelete = () => {
        dispatch(deleteTask(props.task));
    }

  return (
    <div className="flex items-center mb-2 bg-slate-200 px-4 py-2 rounded-lg justify-between">
        <div className="flex items-center">
            <input type="checkbox" className="mr-2" checked={props.task.is_completed} onChange={handleItemComplete} />
            <h1 className={props.task.is_completed ? 'line-through font-semibold' : 'font-semibold'}>{ props.task.body }</h1>
        </div>
        <div className="flex items-center">
            <button onClick={handleItemDelete}>
                <i className="ri-delete-bin-line text-red-500 text-lg ml-2"></i>
            </button>
        </div>
    </div>
  );
}


export default TodoItem;
