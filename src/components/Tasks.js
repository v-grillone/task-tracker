import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="tasks flex flex-col w-screen items-center p-16">
        {tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        })}
    </div>
  )
}

export default Tasks;
