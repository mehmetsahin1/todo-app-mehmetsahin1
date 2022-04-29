import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
	  	isInitialState: true,
        hasAnyListDeleted: false,
        lists: [
            {
                id: "1",
                name: 'Alışveriş Listesi',
            },
            {
                id: "2",
                name: 'Hedeflerim',
            },
            {
                id: "3",
                name: 'Gezilecek Yerler',
            }
        ],
        tasks: [
            {
                id: "1",
                body: "Domates",
                is_completed: false,
                listId: "1",
            },
            {
                id: "2",
                body: "Biber",
                is_completed: false,
                listId: "1",
            },
			{
                id: "3",
                body: "Patlıcan",
                is_completed: false,
                listId: "1",
            },
			{
                id: "4",
                body: "Patates",
                is_completed: true,
                listId: "1",
            },
			{
                id: "5",
                body: "Paris",
                is_completed: true,
                listId: "3",
            },
			{
                id: "6",
                body: "Amsterdam",
                is_completed: false,
                listId: "3",
            },
			{
                id: "7",
                body: "Londra",
                is_completed: false,
                listId: "3",
            },
			{
                id: "8",
                body: "React Bootcamp Bitirmek :)",
                is_completed: false,
                listId: "2",
            },
        ],
    },
  reducers: {
    completeTask: (state, action) => {
        const _state = {...state}

        _state.tasks.map((_task) => {
            if (_task.id === action.payload.id) {
                _task.is_completed = !_task.is_completed
            }

            return _task
        })
        
        state = _state;
        state.hasAnyListDeleted = false;
		state.isInitialState = false;
    },
    deleteTask: (state, action) => {
        const _tasks =  state.tasks.filter((_task) => {
            return _task.id !== action.payload.id
        })

        state.tasks = _tasks;
        state.hasAnyListDeleted = false;
		state.isInitialState = false;
    },
    addTask: (state, action) => {
        const _state = {...state}

        _state.tasks.push({
            id: uuidv4(),
            body: action.payload.body,
            is_completed: false,
            listId: action.payload.listId,
        })

        state = _state;
        state.hasAnyListDeleted = false;
		state.isInitialState = false;
    },
    deleteList: (state, action) => {
        const _lists =  state.lists.filter((_list) => {
            return _list.id !== action.payload
        })

        console.log(_lists)

        const _tasks =  state.tasks.filter((_task) => {
            return _task.listId !== action.payload
        })

        state.lists = _lists;
        state.tasks = _tasks;
        state.hasAnyListDeleted = true;
		state.isInitialState = false;
    },
    addList: (state, action) => {
        state.hasAnyListDeleted = false;
		state.isInitialState = false;
        const _state = {...state}

        _state.lists.push({
            id: uuidv4(),
            name: action.payload
        })

        state = _state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { completeTask, deleteTask, addTask, deleteList, addList } = todoSlice.actions

export default todoSlice.reducer
