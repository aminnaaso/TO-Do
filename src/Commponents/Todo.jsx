import { useState, useEffect } from 'react'
const Todo = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : [];
    })
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all")

    const addtask = () => {
        if (!inputValue.trim()) {
            return;
        }
        // document.getElementById('addBtn').classList.replace("bg-white", "bg-green-700 ");
        setTasks([...tasks, inputValue])
        setInputValue("")
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter(i => i !== id))
    }
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    return (
        <>
            <div className='max-w-md  m-auto  px-12 py-16 bg-blue-200 rounded-4xl shadow-2xl'>
                <div>
                    <div>
                        <h1 className='text-center  font-bold text-3xl py-2'>My Tasks</h1>
                        <p className='text-center text-gray-500 font-medium'>Keep track your daily activity</p>
                    </div>
                    <div className='flex justify-center items-center gap-1 my-4'>
                        <input onChange={(e) => setInputValue(e.target.value) && console.log("nnn")} className='py-2 w-72 px-3 border-2  rounded-lg my-3 outline-none' type='text' placeholder='Enter your task' value={inputValue} ></input>
                        <button onClick={addtask} className=' rounded-lg py-2 px-4 bg-blue-700  border-1 border-black  outline-none text-white font-bold '>+</button>
                    </div>

                    <div className='flex justify-start items-center gap-2 my-2'>
                        <button onClick={() => setFilter("all")} className={`py-1 px-2 border-2 border-gray-600 rounded text-gray-700 outline-none ${filter == 'all' ? "bg-blue-700 , text-white" : ""} `}>All</button>
                        <button onClick={() => setFilter("Pending")} className={`py-1 px-2 border-2 border-gray-600 rounded text-gray-700 outline-none  ${filter == 'Pending' ? "bg-blue-700 , text-white" : ""}`}>Pending</button>
                        <button onClick={() => setFilter("Completed")} className={`py-1 px-2 border-2 border-gray-600 rounded text-gray-700 outline-none ${filter == 'Completed' ? "bg-blue-700 , text-white" : ""} `}>Completed</button>
                    </div>

                    {
                        tasks.map(task => {

                            return (
                                <div key={task.id} className=' flex justify-between items-center border-1 my-4 p-4 rounded '>
                                    <div className='flex items-center justify-center gap-1 b'>
                                        <input className="w-5 h-5 cursor-pointer accent-green-700" type="checkbox" name="" id="" />
                                        <p>{task}</p>
                                    </div>
                                    <button onClick={() => deleteTask(task)} className='bg-red-700  text-white px-2 py-1 text-sm rounded' >delete</button>
                                </div>
                            )

                        })

                    }


                </div>
            </div>

        </>
    )
}

export default Todo
