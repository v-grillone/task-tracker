import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Groceries',
        day: 'Monday',
        reminder: true
    },
    {
        id: 2,
        text: 'Homework',
        day: 'Tuesday',
        reminder: false
    },
]);

// Task Delete function
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

// Task reminder function
const taskReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container flex flex-col items-center m-auto mt-10 border-2 rounded border-blue-100">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskReminder} /> : 'No tasks...'}
    </div>
  );
}

export default App;
