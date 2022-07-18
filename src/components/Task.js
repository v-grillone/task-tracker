import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-container flex flex-row w-1/2 h-16 justify-between items-center border border-blue-100 rounded bg-gray-50 m-2 p-4 ${task.reminder === true ? 'border-l-8 border-blue-300' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <div className="task">
            <h3 className="text-xl">{task.text}</h3>
            <p className="text-sm">{task.day}</p>
        </div>
        <div className="delete">
            <FaTimes style={{'font-size':'22px', color: '#60a5fa', cursor:'pointer'}} onClick={() => onDelete(task.id)} />
        </div>
    </div>
  )
}

export default Task